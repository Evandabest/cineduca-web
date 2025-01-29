import Link from "next/link"
import { signup } from "./actions"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-rose-900">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                className="border-orange-100 focus:ring-rose-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="border-orange-100 focus:ring-rose-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="access">Account Type</Label>
              <select
                id="access"
                name="access"
                required
                defaultValue=""
                className="w-full rounded-md border border-orange-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600"
              >
                <option value="" disabled>Select your role</option>
                <option value="filmmaker">Filmmaker</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>
            <Button 
              formAction={signup}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white"
            >
              Sign Up
            </Button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-rose-600 hover:text-rose-700">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}