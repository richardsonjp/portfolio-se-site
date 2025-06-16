import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"
import Image from "next/image"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "CEO & Founder",
      company: "AntarTech Solutions",
      period: "Jan 2023 - Present",
      location: "Remote",
      logo: "/company-logos/antartech.jpeg",
      achievements: [
        "Established mission to democratize high-quality software solutions through strategic outsourcing and lean engineering",
        "Built cost-optimized outsourcing framework reducing client development costs by 30-50% while maintaining quality standards",
        "Developed custom ERP and CMS systems enabling 200x order processing capacity increase (100 to 2,000+ weekly orders)",
        "Implemented automated workflows reducing manual processing time by 90% and maintaining 99.9% uptime",
        "Architected real-time inventory synchronization across 150 branches with fault-tolerant systems",
        "Achieved 100% client retention through reliable execution and adaptive solutions",
      ],
    },
    {
      title: "Backend Developer",
      company: "Netmonk (PT. Telkom Indonesia)",
      period: "Apr 2023 - Nov 2024",
      location: "Jakarta, Indonesia",
      logo: "/company-logos/netmonk.png",
      achievements: [
        "Led backend development for Netmonk Prime B2B platform using Go, Kafka, MongoDB, and PostgreSQL",
        "Architected and maintained core services including CMS, anomaly detection system, and hardware communication middleware",
        "Implemented dynamic monitoring system with custom configuration support for client systems",
        "Developed middleware bridge for client hardware devices using ICMP & SNMP protocols",
        "Conducted R&D for future features and provided scalable technology upgrade recommendations",
      ],
    },
    {
      title: "Software Engineer",
      company: "Fazz Financial Group Pte. Ltd. (Payfazz)",
      period: "Oct 2018 - Jan 2023",
      location: "Jakarta, Indonesia",
      logo: "/company-logos/fazz.png",
      achievements: [
        "Built and managed Kredit Agen proxy service handling 1000+ transactions/minute using Node.js and Go",
        "Engineered Loanhub fintech platform processing 2-3B IDR in 3 months with 300+ daily active users",
        "Developed autonomous refund resolution system using Golang, reducing manual interventions",
        "Enhanced Modal Agen platform with fraud detection, blocking 100+ fraudulent users in one week",
        "Led SCRUM master duties and managed 24/7 on-call operations with monthly rotations",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience <Briefcase className="inline-block ml-2 h-8 w-8" /></h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{experience.title}</h3>
                          <p className="text-muted-foreground">{experience.company}</p>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
