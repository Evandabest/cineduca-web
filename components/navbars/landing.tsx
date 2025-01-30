
import { Button } from "../ui/button"
import Link from "next/link"


const landing = () => {
    return (
        <>
        <header className="border-b sticky top-0 bg-orange-50/95 backdrop-blur supports-[backdrop-filter]:bg-orange-50/60 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-rose-900">Cineduca</h1>
            <div className="flex items-center gap-2 sm:gap-4">
                <Button variant="ghost" asChild className="text-sm sm:text-base hover:text-rose-700">
                <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="text-sm sm:text-base bg-rose-600 hover:bg-rose-700 text-white">
                <Link href="/signup">Sign Up</Link>
                </Button>
            </div>
            </nav>
        </header>
        </>
    )
}

export default landing