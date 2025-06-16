import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code2, Server, Users, User } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Expertise in Go and Node.js, with a focus on building scalable, secure, and efficient systems. I have experience with microservices, event-driven architecture, and cloud-native technologies.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Scalability",
      description: "Expertise in scaling systems to handle high traffic and data volumes with over 5K RPS.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Leadership",
      description: "Led Small to Medium Sized Teams, with a focus on building high quality software.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Problem Solving",
      description: "Quickly identify and solve complex problems with a focus on performance and scalability.",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About <User className="inline-block ml-2 h-8 w-8" /></h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced Senior Software Engineer with over seven years of expertise as a Backend Engineer,
                specializing in Go and Node.js.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                With a strong foundation in Go and Node.js, I have built scalable, secure, and efficient systems.
                Whether it's in finance, monitoring, or logistics, I have experience with a wide range of industries.
                With SOLID principles and clean architecture & code, I have built systems that are easy to maintain and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
