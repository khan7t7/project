"use client"

import { Card } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Generative AI", level: 90, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "TensorFlow", level: 85, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "PyTorch", level: 88, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Machine Learning", level: 92, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Hugging Face", level: 86, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Stable Diffusion", level: 84, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "DALL-E", level: 82, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" }
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 95, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "JavaScript", level: 92, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Java", level: 90, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "C++", level: 85, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "HTML5", level: 90, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "CSS3", level: 88, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" }
    ]
  },
  {
    name: "Enterprise Solutions",
    skills: [
      { name: "Spring Boot", level: 92, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "ERPNext Development", level: 94, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Frappe Framework", level: 92, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Orion ERP", level: 88, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Enterprise Resource Planning", level: 90, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" }
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "RESTful APIs", level: 91, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "FAST APIs", level: 88, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Apache Tomcat", level: 89, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "WordPress", level: 86, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "CodeIgniter", level: 85, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Bootstrap", level: 89, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "jQuery", level: 87, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" }
    ]
  },
  {
    name: "Database & Infrastructure",
    skills: [
      { name: "MariaDB", level: 89, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Oracle", level: 86, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "PostgreSQL", level: 88, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "MySQL", level: 90, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Cloud Computing", level: 87, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "IBM Cloud", level: 85, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 91, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Apache Kafka", level: 89, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Git", level: 93, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "GitHub", level: 92, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "GitHub Actions", level: 88, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Postman API", level: 90, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Network Security", level: 86, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" }
    ]
  },
  {
    name: "Digital Marketing & Content",
    skills: [
      { name: "SEO Optimization", level: 88, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Email Marketing", level: 85, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Social Media Management", level: 87, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Content Writing", level: 89, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" }
    ]
  }
]

export function Skills() {
  return (
    <MotionSection className="py-20 px-4 relative overflow-hidden" delay={0.5}>
      <div className="absolute inset-0" />
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="p-4 gradient-border backdrop-blur-sm bg-background/70">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
