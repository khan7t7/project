"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { BrainIcon, BuildingIcon, CodeIcon, TargetIcon } from "lucide-react"
export function About() {
  return (
    <MotionSection className="py-20 px-4" delay={0.3}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        {/* Main introduction card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Results-driven full-stack developer with a passion for AI and building innovative solutions.
            </p>
          </CardContent>
        </Card>

        {/* Grid of specialty cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <CodeIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Expertise</h3>
              </div>
              <p>Python, JavaScript, C++, and modern AI frameworks including TensorFlow, PyTorch, and Hugging Face.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <BrainIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">AI Solutions</h3>
              </div>
              <p>Specialized in designing and deploying generative AI models, RESTful APIs, and cloud-based services.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <BuildingIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Enterprise Integration</h3>
              </div>
              <p>Strong background in ERP systems, particularly ERPNext, facilitating seamless AI integration into business processes.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <TargetIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Core Values</h3>
              </div>
              <p>Committed to building scalable, efficient, and ethically responsible AI applications that drive growth.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  )
}
