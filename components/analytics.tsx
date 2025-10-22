"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import Script from "next/script";

interface AnalyticsProps {
    debug?: boolean
}

export function AnalyticsVercel({ debug = false }: AnalyticsProps) {
    return <VercelAnalytics debug={debug} />
}

export function AnalyticsGoogle() {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID!

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
            </Script>
        </>
    )
}