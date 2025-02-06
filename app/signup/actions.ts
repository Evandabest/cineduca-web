'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData): Promise<void> {
    const supabase = await createClient()
  
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    
  
    const data = {
      email,
      password
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
      console.error('Signup error:', error)
    }

    revalidatePath('/', 'layout')
    redirect('/home')
}