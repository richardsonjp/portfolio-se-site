import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2 } from "lucide-react"
import Link from "next/link"
import OpenSource from "./open-source"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "MGW Express Logistics System",
      description:
        "A logistics management system for MGW Express. It is a web application that allows users to manage their shipments, orders, and customers.",
      tags: ["Go", "PostgreSQL", "ERP", "CMS", "React", "FTP", "Payment Gateway"],
      liveLink: "https://admin-resi.mgwexpress.id",
      logo: "/company-logos/mgwexpress.png",
    },
    {
      title: "SNKI Quotation System",
      description: "A quotation system for SNKI. It is a web application that allows users to manage their quotations, clients, products, invoices, payments, tracking, and more.",
      tags: ["Go", "PostgreSQL", "ERP", "CMS", "React", "React Native"],
      liveLink: "https://snki.co.id",
      logo: "https://www.snki.co.id/_next/image?url=%2Fimages%2Flogo.jpg&w=256&q=75",
    },
    {
      title: "Go Skeleton",
      description:
        "A skeleton project for Go. It is a simple project that allows you to quickly start a new Go project with complete setup.",
      tags: ["Go", "Project Template", "Docker", "CI/CD", "Logging", "Monitoring", "Product Development"],
      codeLink: "https://github.com/richardsonjp/go-skeleton",
    },
    {
      title: "Go Library",
      description: "A helper library for Go. It is a simple library that allows you to seamlessly use Go's standard library with some other 3rd party libraries.",
      tags: ["Go", "Library", "Product Development"],
      codeLink: "https://github.com/richardsonjp/antartech-lib",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects <Code2 className="inline-block ml-2 h-8 w-8" /></h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index}>
                <Card className="h-full project-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {project.logo && (
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={project.logo}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-primary/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.codeLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-4 w-4" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Include Open Source section directly under Projects
          <div className="mt-20">
            <OpenSource />
          </div> */}
        </div>
      </div>
    </section>
  )
}
