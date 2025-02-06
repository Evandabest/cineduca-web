



import { redirect } from 'next/navigation'


async function studentWrap ({children, role }: Readonly<{children: React.ReactNode, role: string}>) {
    if (!("Student_" in (children?.toString))) {
        redirect("/")
    }
    return (
    <div>
        {children}
    </div>
    )


}


export default studentWrap;