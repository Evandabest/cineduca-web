import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Transform Your Spanish Class
            <span className="block text-rose-600 mt-2">With Authentic Cinema</span>
          </h1>
          <p className="mx-auto max-w-[42rem] text-gray-600 text-base sm:text-lg lg:text-xl px-4">
            Engage students with curated Spanish films and AI-powered lesson plans. 
            Make language learning interactive and culturally immersive.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-12">
          <Card className="w-full bg-white hover:bg-orange-50 transition-colors border-orange-100">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl sm:text-2xl text-rose-900">AI-Generated Assessments</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600">
                Save time with automatic question generation tailored to your students&apos; level
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full bg-white hover:bg-orange-50 transition-colors border-orange-100">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl sm:text-2xl text-rose-900">Interactive Lesson Plans</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600">
                Create custom learning materials synchronized with film timestamps
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full md:col-span-2 lg:col-span-1 bg-white hover:bg-orange-50 transition-colors border-orange-100">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl sm:text-2xl text-rose-900">Progress Tracking</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600">
                Monitor student engagement and comprehension in real-time
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-center bg-rose-50 rounded-lg my-8">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold px-4 text-rose-900">Ready to Revolutionize Your Spanish Class?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" asChild className="text-sm sm:text-base bg-rose-600 hover:bg-rose-700 text-white">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-sm sm:text-base border-rose-600 text-rose-600 hover:bg-rose-50">
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}