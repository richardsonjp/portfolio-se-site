"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { GoogleTagManager } from '@next/third-parties/google'

interface AnalyticsProps {
    debug?: boolean
}

export function AnalyticsVercel({ debug = false }: AnalyticsProps) {
    return <VercelAnalytics debug={debug} />
}

export function AnalyticsGoogle() {
    return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID!} />
}