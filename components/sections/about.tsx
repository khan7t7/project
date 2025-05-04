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
            <p className="text-lg leading-relaxed text-foreground/80">
              Full-Stack Engineer bridging tech and business as an ERP Techno-Functional Specialist. Passionate about exploring the innovative potential of Generative AI.
            </p>
          </CardContent>
        </Card>

        {/* Grid of specialty cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <CodeIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Expertise</h3>
              </div>
              <p className="text-foreground/70">Python, JavaScript, C++, and modern AI frameworks including TensorFlow, PyTorch, and Hugging Face.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <BrainIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">AI Solutions</h3>
              </div>
              <p className="text-foreground/70">Specialized in designing and deploying generative AI models, RESTful APIs, and cloud-based services.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <BuildingIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Enterprise Integration</h3>
              </div>
              <p className="text-foreground/70">Strong background in ERP systems, particularly ERPNext, facilitating seamless AI integration into business processes.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <TargetIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Core Values</h3>
              </div>
              <p className="text-foreground/70">Committed to building scalable, efficient, and ethically responsible AI applications that drive growth.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  )
}
