import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import * as XLSX from 'https://esm.sh/xlsx@0.18.5'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { filePath } = await req.json()

    if (!filePath) {
      return new Response(
        JSON.stringify({ error: 'No file path provided' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Download the file from storage
    const { data: fileData, error: downloadError } = await supabase.storage
      .from('excel_instructions')
      .download(filePath)

    if (downloadError) {
      console.error('Download error:', downloadError)
      throw downloadError
    }

    // Convert the downloaded file to array buffer
    const arrayBuffer = await fileData.arrayBuffer()
    
    // Read the Excel file
    const workbook = XLSX.read(arrayBuffer)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet)

    // Process and validate the quiz data
    const questions = jsonData.map((row: any) => ({
      question: row.Question,
      options: [
        row.Option1,
        row.Option2,
        row.Option3,
        row.Option4
      ],
      correctAnswer: parseInt(row.CorrectAnswer) - 1
    }))

    return new Response(
      JSON.stringify({ 
        message: 'File processed successfully',
        questions
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Processing error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process file', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})