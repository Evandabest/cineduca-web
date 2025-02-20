"use client"
import { Button } from "../ui/button"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"

const StudentNav = () => {
    return (
        <header className="border-b sticky top-0 bg-orange-50/95 backdrop-blur supports-[backdrop-filter]:bg-orange-50/60 z-50">
            <nav className="h-16 flex items-center justify-between px-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-2">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-4 mt-8">
                            <Link href="/dashboard" className="text-lg hover:text-rose-700">Dashboard</Link>
                            <Link href="/courses" className="text-lg hover:text-rose-700">My Courses</Link>
                            <Link href="/profile" className="text-lg hover:text-rose-700">Profile</Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <h1 className="text-2xl font-bold text-rose-900">Cineduca</h1>
                <Button 
                    variant="ghost" 
                    className="text-sm sm:text-base hover:text-rose-700 mr-2"
                    onClick={() => {
                        // Add logout logic here
                        console.log("Logout clicked")
                    }}
                >
                    Logout
                </Button>
            </nav>
        </header>
    )
}

export default StudentNav