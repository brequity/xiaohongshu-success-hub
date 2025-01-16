import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    // First, add to our database
    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
    const { error: dbError } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }]);

    if (dbError) {
      if (dbError.message.includes('duplicate key')) {
        return new Response(
          JSON.stringify({ error: 'This email is already subscribed!' }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
      throw dbError;
    }

    // Then, add to SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contacts: [{
          email,
          custom_fields: {}
        }],
      }),
    });

    if (!response.ok) {
      const sendgridError = await response.text();
      console.error('SendGrid Error:', sendgridError);
      throw new Error('Failed to add contact to SendGrid');
    }

    return new Response(
      JSON.stringify({ message: 'Successfully subscribed!' }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe. Please try again.' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});