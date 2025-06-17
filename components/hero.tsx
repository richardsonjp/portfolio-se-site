"use client"

import { AnimatedBeam } from "@/components/ui/animated-beam"
import { Button } from "@/components/ui/button"
import { Github, Gitlab, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bg1Ref = useRef<HTMLDivElement>(null)
  const bg2Ref = useRef<HTMLDivElement>(null)
  const bg3Ref = useRef<HTMLDivElement>(null)
  const bg4Ref = useRef<HTMLDivElement>(null)

  return (
    <section id="hero" ref={containerRef} className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div ref={bg1Ref} className="absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-primary/20" />
      <div ref={bg2Ref} className="absolute right-[15%] top-[30%] h-4 w-4 rounded-full bg-primary/20" />
      <div ref={bg3Ref} className="absolute left-[20%] bottom-[25%] h-4 w-4 rounded-full bg-primary/20" />
      <div ref={bg4Ref} className="absolute right-[25%] bottom-[35%] h-4 w-4 rounded-full bg-primary/20" />

      <div className="container relative z-10 flex flex-col items-center justify-center gap-4 text-center">
        <div ref={profileRef} className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary">
        </div>
        <h1 ref={titleRef} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Richardson Jayaputra
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Senior Software Engineer specializing in Backend Systems, Go, and Node.js
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/richardsonjp" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://gitlab.com/richardsonjp" target="_blank" rel="noopener noreferrer">
                <Gitlab className="h-5 w-5" />
                <span className="sr-only">Gitlab</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://linkedin.com/in/richardsonjp" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="mailto:jayaputrarichardson@icloud.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bg1Ref}
        toRef={profileRef}
        pathColor="rgb(3, 161, 252)"
        pathWidth={2}
        pathOpacity={0.2}
        gradientStartColor="#03a1fc"
        gradientStopColor="#03a1fc"
        duration={4}
        curvature={-75}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bg2Ref}
        toRef={titleRef}
        pathColor="rgb(3, 161, 252)"
        pathWidth={2}
        pathOpacity={0.2}
        gradientStartColor="#03a1fc"
        gradientStopColor="#03a1fc"
        duration={4}
        curvature={75}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bg3Ref}
        toRef={profileRef}
        pathColor="rgb(3, 161, 252)"
        pathWidth={2}
        pathOpacity={0.2}
        gradientStartColor="#03a1fc"
        gradientStopColor="#03a1fc"
        duration={4}
        curvature={-50}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bg4Ref}
        toRef={titleRef}
        pathColor="rgb(3, 161, 252)"
        pathWidth={2}
        pathOpacity={0.2}
        gradientStartColor="#03a1fc"
        gradientStopColor="#03a1fc"
        duration={4}
        curvature={50}
        reverse
      />
    </section>
  )
}
