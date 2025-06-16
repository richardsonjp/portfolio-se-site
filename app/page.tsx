import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Richardson Jayaputra | Senior Software Engineer",
  description: "Portfolio of Richardson Jayaputra, a Senior Software Engineer specializing in Backend Systems, Go, and Node.js. Explore my experience, projects, and technical expertise.",
  keywords: [
    "Richardson Jayaputra",
    "Richardson",
    "Jayaputra",
    "Richard",
    "richardsonjp",
    "Senior Software Engineer",
    "Backend Developer",
    "Go Developer",
    "Node.js Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Indonesia",
    "Jakarta",
    "Tech Lead",
    "System Architecture",
    "API Development",
    "Cloud Computing",
    "AWS",
    "Microservices",
    "Software Development",
    "Web Development",
    "Enterprise Solutions",
    "Fintech",
    "Healthcare Technology",
  ].join(", "),
  authors: [{ name: "Richardson Jayaputra" }],
  creator: "Richardson Jayaputra",
  publisher: "Richardson Jayaputra",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Richardson Jayaputra | Senior Software Engineer",
    description: "Portfolio of Richardson Jayaputra, a Senior Software Engineer specializing in Backend Systems, Go, and Node.js. Explore my experience, projects, and technical expertise.",
    siteName: "Richardson Jayaputra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richardson Jayaputra | Senior Software Engineer",
    description: "Portfolio of Richardson Jayaputra, a Senior Software Engineer specializing in Backend Systems, Go, and Node.js. Explore my experience, projects, and technical expertise.",
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </div>
  )
}
