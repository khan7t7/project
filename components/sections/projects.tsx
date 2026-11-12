"use client"
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { ThreeScene } from "@/components/ui/ThreeScene";
import { motion } from "framer-motion";
import { Brain, Code2, Globe2, LineChart } from "lucide-react";

const projects = [
  {
    title: "ERPNext Retail & Intelligent Automation",
    date: "Oct 2025 – May 2026",
    company: "LucrumX & Radiant Medical (Pvt) Ltd.",
    summary: "Leading end-to-end ERP implementation lifecycles specializing in Retail systems and POS modules. Engineered Frappe customizations (server-side Python hooks, DocTypes) and intelligent n8n workflows with LLM agents to categorize unstructured data.",
    icon: Code2,
    tags: ["ERPNext", "Frappe", "Retail POS", "LLM Agents", "n8n", "Python"]
  },
  {
    title: "Oracle EBS to ERPNext Migration & APIs",
    date: "Feb 2023 – Aug 2025",
    company: "Al Ansari Group LLC",
    summary: "Led end-to-end data migration from Oracle EBS (10g/11g) to ERPNext, writing custom SQL/PLSQL scripts ensuring high data integrity and zero-downtime cutover. Built custom RESTful APIs, n8n automations, and real-time Power BI dashboards.",
    icon: Code2,
    tags: ["ERPNext", "Frappe", "Oracle EBS", "PL/SQL", "Power BI", "CI/CD"]
  },
  {
    title: "Real-Time Weapon Detection System (AI/ML)",
    date: "2022",
    company: "University of Faisalabad (Capstone)",
    summary: "Developed an AI/ML-based computer vision weapon detection system leveraging OpenCV, YOLOv2, and CNN. The system accurately identifies weapons in real-time video feeds and triggers automated emergency alerts.",
    icon: Brain,
    tags: ["OpenCV", "YOLO", "CNN", "Python", "Deep Learning"]
  },
  {
    title: "Scalable Web Applications & APIs",
    date: "Oct 2022 – Jan 2023",
    company: "Content Arcade Ltd",
    summary: "Architected and developed high-performance RESTful APIs using Flask and FastAPI, handled Ajax workflows, and integrated React & Next.js frontend interfaces with PostgreSQL and Redis databases.",
    icon: Globe2,
    tags: ["FastAPI", "Flask", "React", "Next.js", "PostgreSQL", "Redis"]
  },
  {
    title: "Enterprise SEO & Digital Strategy",
    date: "Oct 2020 – Oct 2021",
    company: "Software Bench Inc",
    summary: "Led comprehensive technical SEO, content strategy, and backlinking campaigns across 8+ client websites, driving substantial organic search traffic and search engine ranking improvements.",
    icon: LineChart,
    tags: ["Technical SEO", "Analytics", "Content Strategy", "Growth"]
  }
]

export function Projects() {
  return (
    <MotionSection className="py-20 px-4 relative overflow-hidden" delay={0.7}>
      <ThreeScene /> {/* Add the Three.js scene */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">Projects</h2>
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
                <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
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
