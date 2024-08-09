'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "loading") return
        if (!session) {
            router.push('/login')
        }
    }, [session, status, router])

    if (status === "loading" || !session) {
        return <div>Loading...</div>
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedLayout
