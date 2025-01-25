import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting get-dashboard-stats function");
    
    // Validate environment variables
    if (!Deno.env.get("SUPABASE_URL") || !Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")) {
      throw new Error("Missing required environment variables");
    }

    // Initialize Supabase client
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    console.log("Fetching leads data...");
    const { data: leadsData, error: leadsError } = await supabaseAdmin
      .from('growth_strategy_leads')
      .select('created_at')
      .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

    if (leadsError) {
      console.error("Error fetching leads:", leadsError);
      throw leadsError;
    }

    console.log("Fetching contact form submissions...");
    const { data: contactData, error: contactError } = await supabaseAdmin
      .from('contact_form_submissions')
      .select('created_at')
      .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

    if (contactError) {
      console.error("Error fetching contacts:", contactError);
      throw contactError;
    }

    console.log("Processing data...");
    // Initialize daily stats map
    const dailyStats = new Map();
    const now = new Date();
    
    // Initialize last 30 days with 0 counts
    for (let i = 0; i < 30; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      dailyStats.set(dateStr, { leads: 0, contacts: 0 });
    }

    // Count leads
    leadsData.forEach((lead) => {
      const dateStr = new Date(lead.created_at).toISOString().split('T')[0];
      if (dailyStats.has(dateStr)) {
        const current = dailyStats.get(dateStr);
        dailyStats.set(dateStr, { ...current, leads: current.leads + 1 });
      }
    });

    // Count contact form submissions
    contactData.forEach((contact) => {
      const dateStr = new Date(contact.created_at).toISOString().split('T')[0];
      if (dailyStats.has(dateStr)) {
        const current = dailyStats.get(dateStr);
        dailyStats.set(dateStr, { ...current, contacts: current.contacts + 1 });
      }
    });

    // Convert Map to array and sort by date
    const stats = Array.from(dailyStats.entries())
      .map(([date, counts]) => ({
        date,
        ...counts,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    console.log("Successfully processed stats data");
    
    return new Response(JSON.stringify({ stats }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in get-dashboard-stats:", error);
    
    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.stack,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});