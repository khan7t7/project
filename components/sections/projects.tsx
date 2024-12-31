"use client"
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { ThreeScene } from "@/components/ui/ThreeScene";
import { motion } from "framer-motion";
import { Brain, Code2, Globe2, LineChart } from "lucide-react";

const projects = [
  {
    title: "ERPNext Implementation",
    date: "Oct 2023 - Present",
    company: "Al-Ansari Group LLC",
    summary: "Proven track record in implementing and optimizing ERPNext solutions. Led the development of custom modules, system integration, user training, and workflow optimization across key business areas.",
    icon: Code2,
    tags: ["ERPNext", "Python", "JavaScript", "AI/ML"]
  },
  {
    title: "Weapon Detection Using AI/ML",
    date: "Jun 2022",
    company: "The University Of Faisalabad",
    summary: "Developed an AI/ML-based weapon detection system leveraging OpenCV, YOLOv2, and CNN. This system effectively identifies weapons in real-time and triggers automated alerts.",
    icon: Brain,
    tags: ["OpenCV", "YOLO", "CNN", "Python"]
  },
  {
    title: "Online Quiz Application",
    date: "Jan 2022",
    company: "Content Arcade Ltd",
    summary: "Designed and developed an interactive web-based quiz application using Flask and RESTful APIs, incorporating AI for adaptive question generation.",
    icon: Globe2,
    tags: ["Flask", "REST API", "AI", "Python"]
  },
  {
    title: "SEO Optimization Project",
    date: "Oct 2021",
    company: "Software Bench Inc",
    summary: "Enhanced the global rankings of 8+ websites using AI-driven SEO strategies, including on-page optimization, technical SEO, and content creation.",
    icon: LineChart,
    tags: ["SEO", "Analytics", "Content", "AI"]
  }
]

export function Projects() {
  return (
    <MotionSection className="py-20 px-4 relative overflow-hidden" delay={0.7}>
      <ThreeScene /> {/* Add the Three.js scene */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow bg-background/90">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{project.company}</p>
                      <p className="mb-4">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
