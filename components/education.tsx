import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Arts: Business Management",
      institution: "Binus University",
      year: "2023 - 2027",
      description: "Completed a comprehensive business management program with a focus on business management, marketing, and finance. Gained a strong foundation in business principles and practices that have been instrumental in my professional career.",
      logo: "/company-logos/bion.png",
    },
    {
      degree: "Fullstack Web Development Bootcamp",
      institution: "Purwadhika Digital Technology School",
      year: "Apr 2018 - Sep 2018",
      description: "Completed a comprehensive fullstack web development program with a focus on software development, algorithms, and data structures. Gained a basic foundation in computer science principles and engineering practices that have been a fundamental to start my professional career.",
      logo: "/company-logos/purwadhika.png",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education <GraduationCap className="inline-block ml-2 h-8 w-8" /></h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {educations.map((education, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={education.logo}
                            alt={`${education.institution} logo`}
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{education.degree}</h3>
                          <p className="text-muted-foreground">{education.institution}</p>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <span className="text-sm text-muted-foreground">{education.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{education.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
