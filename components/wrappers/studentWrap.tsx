



import { redirect } from 'next/navigation'


async function studentWrap ({children, role }: Readonly<{children: React.ReactNode, role: string}>) {
    if (!children || !children.toString().includes("Student_")) {
        redirect("/")
    }
    console.log(role)
    return (
    <div>
        {children}
    </div>
    )


}


export default studentWrap;