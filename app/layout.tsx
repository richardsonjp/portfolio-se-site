import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Richardson Jayaputra | Software Engineer",
  description:
    "Portfolio of Richardson Jayaputra, a Software Engineer specializing in Backend Systems writing in Go and Node.js.",
  metadataBase: new URL("https://richardsonjp.com"),
  keywords: [
    "Richardson Jayaputra",
    "Software Engineer",
    "Backend Engineer",
    "Go",
    "Golang",
    "Javascript",
    "Ruby",
    "Ruby On Rails",
    "TypeScript",
    "Next.js",
    "Node.js",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Kafka",
  ],
  authors: [{ name: "Richardson Jayaputra" }],
  creator: "Richardson Jayaputra",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}
