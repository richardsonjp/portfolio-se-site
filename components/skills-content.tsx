import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain } from "lucide-react"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "Next.js", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Go", "Node.js", "Ruby", "Bash Scripting", "RESTful APIs", "Microservices", "Payment Gateway"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "InfluxDB"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Prometheus", "Grafana", "Git", "Docker", "CI/CD", "JIRA", "Figma", "Kafka", "FTP"],
    },
    {
      category: "Adapted Methodologies",
      skills: ["Agile", "Scrum", "SOLID", "Clean Architecture & Code", "Design Patterns"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills <Brain className="inline-block ml-2 h-8 w-8" /></h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical expertise and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <Card className="h-full border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
