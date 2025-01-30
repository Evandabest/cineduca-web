


'use server'

import { createClient } from '@/utils/supabase/server'
//import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function updateUserType(formData: FormData) {

  const supabase = await createClient()

  const type = formData.get('type') as string

  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  // Update user type
  const { error } = await supabase
    .from('users')
    .update({ type })
    .eq('id', user.id)

  if (error) {
    console.error('Error updating user type:', error)
    throw error
  }

  redirect('/home')
}