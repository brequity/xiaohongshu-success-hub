import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    console.log('Starting admin user setup...')

    // First, check if user exists
    const { data: { users }, error: getUserError } = await supabaseClient.auth.admin.listUsers()
    
    if (getUserError) {
      console.error('Error fetching users:', getUserError)
      throw getUserError
    }

    const adminEmail = 'adjial@gmail.com'
    let userId = users.find(u => u.email === adminEmail)?.id

    if (!userId) {
      console.log('Admin user not found, creating new user...')
      // Create the user if they don't exist
      const { data: newUser, error: createError } = await supabaseClient.auth.admin.createUser({
        email: adminEmail,
        password: 'PL1q2w3e4r',
        email_confirm: true
      })

      if (createError) {
        console.error('Error creating user:', createError)
        throw createError
      }

      userId = newUser.user.id
      console.log('New admin user created with ID:', userId)
    } else {
      console.log('Existing admin user found, updating password...')
      // Update password for existing user
      const { error: updateError } = await supabaseClient.auth.admin.updateUserById(
        userId,
        { password: 'PL1q2w3e4r' }
      )

      if (updateError) {
        console.error('Error updating password:', updateError)
        throw updateError
      }
    }

    // Ensure user has admin role
    const { data: existingRole } = await supabaseClient
      .from('user_roles')
      .select('*')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single()

    if (!existingRole) {
      console.log('Adding admin role...')
      const { error: roleError } = await supabaseClient
        .from('user_roles')
        .insert({ user_id: userId, role: 'admin' })

      if (roleError) {
        console.error('Error setting admin role:', roleError)
        throw roleError
      }
    }

    return new Response(
      JSON.stringify({ 
        message: 'Admin user setup completed successfully',
        userId: userId
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})