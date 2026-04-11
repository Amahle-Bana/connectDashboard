"use client"

/**
 * Email OTP verification page — disabled.
 * Redirects to home (login). Restore UI using connectWeb/OTP_IMPLEMENTATION_RESTORE.md when needed.
 */
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function OTPVerificationPage() {
    const router = useRouter()

    useEffect(() => {
        router.replace("/")
    }, [router])

    return null
}
