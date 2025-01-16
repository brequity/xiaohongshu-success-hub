import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@14.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    });

    // Log the stripe configuration
    console.log('Creating payment session with Stripe configuration:', {
      apiVersion: '2023-10-16',
      hasSecretKey: !!Deno.env.get('STRIPE_SECRET_KEY'),
    });

    // Verify the price exists before creating the session
    const priceId = 'price_1QhtLRKQHLuFrkaP6wUOMZE6';
    try {
      const price = await stripe.prices.retrieve(priceId);
      console.log('Price found:', {
        id: price.id,
        active: price.active,
        currency: price.currency,
      });
    } catch (priceError) {
      console.error('Error retrieving price:', priceError);
      return new Response(
        JSON.stringify({ error: `Price verification failed: ${priceError.message}` }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    console.log('Creating payment session...');
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/`,
    });

    console.log('Payment session created:', session.id);
    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error creating payment session:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});