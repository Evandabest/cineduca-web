import StudentNav from "@/components/navbars/student-nav"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <StudentNav />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}