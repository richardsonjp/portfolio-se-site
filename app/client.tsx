"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import NoScriptStyles from "@/components/noscript-styles"
import { SpeedInsights } from "@/components/speed-insights"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <NoScriptStyles />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <noscript>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-4 text-center text-sm">
                For the best experience, please enable JavaScript. Some features may be limited without it.
              </div>
            </noscript>
            <AnimatedBackground />
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
