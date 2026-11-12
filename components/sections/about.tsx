"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { BrainIcon, BuildingIcon, CodeIcon, TargetIcon } from "lucide-react"

export function About() {
  return (
    <MotionSection className="py-20 px-4" delay={0.3}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">About Me</h2>

        {/* Main introduction card */}
        <Card className="mb-8 backdrop-blur-sm bg-background/70">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-foreground/85">
              Senior ERPNext Architect & Frappe Developer with strong techno-functional expertise in end-to-end ERP implementations, bespoke customization, and complex system integrations. Leverages enterprise-grade perspective from hands-on work with legacy systems including Oracle development environments, PL/SQL, and Oracle EBS to bridge the gap between complex business requirements and modern technical execution. Proven track record of modernizing enterprise operations by automating workflows with n8n and AI-driven LLM agents, delivering scalable, efficient, and future-proof ERP solutions.
            </p>
          </CardContent>
        </Card>

        {/* Grid of specialty cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <BuildingIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">ERPNext & Frappe Architecture</h3>
              </div>
              <p className="text-foreground/70">End-to-end implementation life cycles, custom Frappe app development, DocTypes, server-side Python hooks, client-side JS, and Retail/POS inventory synchronization without core code overrides.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <CodeIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Legacy Systems & Oracle Migration</h3>
              </div>
              <p className="text-foreground/70">Deep experience with Oracle DB (10g–19c), PL/SQL extraction scripts, Oracle EBS data migration to ERPNext with high integrity and zero downtime, plus Oracle Forms/Reports interfacing.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <BrainIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">AI Agents & Workflow Automation</h3>
              </div>
              <p className="text-foreground/70">Intelligent automation with n8n, AI-driven LLM agents for unstructured data processing, RAG architectures, prompt engineering, and real-time business intelligence dashboards via Power BI.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <TargetIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Full-Stack & DevOps Engineering</h3>
              </div>
              <p className="text-foreground/70">Modern web architecture with Python (FastAPI, Flask, Django), TypeScript, Next.js, Docker containerization, Linux server administration, and automated GitHub Actions CI/CD pipelines.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  )
}
