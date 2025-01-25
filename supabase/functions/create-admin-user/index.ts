import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { email, password } = await req.json()

    console.log('Checking if user exists:', email)

    // First check if user exists
    const { data: existingUsers, error: searchError } = await supabase.auth.admin.listUsers({
      page: 1,
      per_page: 1,
      search: email
    })

    if (searchError) {
      console.error('Error searching for user:', searchError)
      throw searchError
    }

    if (existingUsers?.users?.some(u => u.email?.toLowerCase() === email.toLowerCase())) {
      console.log('User already exists:', email)
      return new Response(
        JSON.stringify({ error: 'A user with this email address already exists' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    console.log('Creating new user:', email)
    
    // Create the user
    const { data: userData, error: createError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (createError) {
      console.error('Error creating user:', createError)
      return new Response(
        JSON.stringify({ error: createError.message }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    if (!userData.user) {
      console.error('No user data returned after creation')
      throw new Error('Failed to create user')
    }

    console.log('User created successfully:', userData.user.id)

    // Insert admin role for the new user
    const { error: roleError } = await supabase
      .from('user_roles')
      .insert({
        user_id: userData.user.id,
        role: 'admin'
      })

    if (roleError) {
      console.error('Error assigning admin role:', roleError)
      // Even if role assignment fails, we don't want to roll back user creation
      return new Response(
        JSON.stringify({ 
          warning: 'User created but role assignment failed',
          error: roleError.message 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    console.log('Admin role assigned successfully')

    return new Response(
      JSON.stringify({ 
        data: userData,
        message: 'User created and admin role assigned successfully'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Unexpected error in create-admin-user function:', error)
    return new Response(
      JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})