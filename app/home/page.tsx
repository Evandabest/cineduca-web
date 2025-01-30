"use client"
import { createClient } from "@/utils/supabase/client"

import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation"
import TeacherCatalog from "@/components/ui/homepage/teacher"

const home = () => {   
    const supabase =  createClient() 
    const router = useRouter()
    const[user, setUser] = useState<any>()
    
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()

            if (user) {
                const { data: userData } = await supabase.from('users').select('*').eq('id', user.id).single()
                setUser(userData)
            }
        }

        fetchUser()

    }, [])

    if (!user) {
        router.push('/login')
    }

    if (user?.type == 'teacher') {
        return (
            <div>
                <h1>Welcome {user.name}</h1>
                <TeacherCatalog />
            </div>
        )
    }

    else if (user?.type == 'student') {
        return (
            <div>
                <h1>Welcome {user.name}</h1>
                <TeacherCatalog />
            </div>
        )
    }

    else if (user?.type == 'filmaker') {
        return (
            <div>
                <h1>Welcome {user.name}</h1>
                <TeacherCatalog />
            </div>
        )
    }

    

}

export default home