"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { updateUserType } from "./actions"
import { useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export default function UserTypePage() {
    const supabase = createClient()
    const Router = useRouter()

    useEffect(() => {
        async function checkUser() {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                Router.push('/login')
            }
        }
        checkUser()
    }),[supabase]

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-rose-900">Select Your Role</h1>
            <p className="text-gray-600">Choose how you&apos;ll use Cineduca</p>
          </div>

          <form className="grid gap-6">
            <Card className="relative">
              <input type="radio" name="type" value="filmmaker" className="peer sr-only" required />
              <CardHeader className="cursor-pointer peer-checked:text-rose-600">
                <CardTitle>Filmmaker</CardTitle>
                <CardDescription>Share your Spanish-language films with educators and students worldwide</CardDescription>
              </CardHeader>
              <div className="absolute inset-0 border-2 rounded-lg peer-checked:border-rose-600 pointer-events-none" />
            </Card>

            <Card className="relative">
              <input type="radio" name="type" value="teacher" className="peer sr-only" required />
              <CardHeader className="cursor-pointer peer-checked:text-rose-600">
                <CardTitle>Teacher</CardTitle>
                <CardDescription>Create engaging Spanish lessons using authentic films and AI-powered tools</CardDescription>
              </CardHeader>
              <div className="absolute inset-0 border-2 rounded-lg peer-checked:border-rose-600 pointer-events-none" />
            </Card>

            <Card className="relative">
              <input type="radio" name="type" value="student" className="peer sr-only" required />
              <CardHeader className="cursor-pointer peer-checked:text-rose-600">
                <CardTitle>Student</CardTitle>
                <CardDescription>Learn Spanish through immersive film experiences and interactive lessons</CardDescription>
              </CardHeader>
              <div className="absolute inset-0 border-2 rounded-lg peer-checked:border-rose-600 pointer-events-none" />
            </Card>

            <Button 
              formAction={updateUserType}
              className="bg-rose-600 hover:bg-rose-700 text-white w-full"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}