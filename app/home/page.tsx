"use client"
import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import TeacherCatalog from "@/components/ui/homepage/teacher"

interface UserData {
  id: string
  name: string | null
  type: 'teacher' | 'student' | 'filmmaker'
}

const Home = () => {   
    const supabase = createClient() 
    const router = useRouter()
    const [user, setUser] = useState<UserData | null>(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser()

                if (!user) {
                    router.push('/login')
                    return
                }

                const { data: userData } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', user.id)
                    .single()

                setUser(userData)
            } catch (error) {
                console.error('Error fetching user:', error)
                router.push('/login')
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [supabase, router])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return null
    }

    const renderContent = () => (
        <div>
            <h1>Welcome {user.name}</h1>
            <TeacherCatalog />
        </div>
    )

    switch (user.type) {
        case 'teacher':
        case 'student':
        case 'filmmaker':
            return renderContent()
        default:
            router.push('/type')
            return null
    }
}

export default Home