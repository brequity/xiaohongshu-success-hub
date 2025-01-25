import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface GrowthStrategyFormData {
  email: string;
  companyName: string;
  contactNumber: string;
  information: string;
  marketingObjective: string;
  budget: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: GrowthStrategyFormData = await req.json();
    console.log("Sending growth strategy form email for:", formData);

    const emailHtml = `
      <h2>New Growth Strategy Form Submission</h2>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company Name:</strong> ${formData.companyName || 'Not provided'}</p>
      <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
      <p><strong>Marketing Objective:</strong> ${formData.marketingObjective}</p>
      <p><strong>Budget Range:</strong> ${formData.budget}</p>
      <p><strong>Additional Information:</strong></p>
      <p>${formData.information || 'Not provided'}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Growth Strategy Form <onboarding@resend.dev>",
        to: ["adjial@gmail.com"],
        subject: `New Growth Strategy Form Submission from ${formData.companyName || formData.email}`,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in send-growth-strategy-email function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send growth strategy email" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);