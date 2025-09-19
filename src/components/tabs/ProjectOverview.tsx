import { Card } from "@/components/ui/card";
import { CheckCircle, Palette, Code, Zap } from "lucide-react";

const deliverables = [
  "Modern responsive design",
  "UI/UX in Figma", 
  "React/Next.js frontend",
  "CMS setup",
  "SEO optimization",
  "Security & deployment"
];

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Tailored branding that reflects your unique identity"
  },
  {
    icon: Code,
    title: "Clean Code", 
    description: "Scalable, maintainable code built for the future"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized speed and exceptional user experience"
  }
];

export const ProjectOverview = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-professional-grey mb-4">
          What We'll Deliver
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive digital solution designed specifically for venture capital firms
        </p>
      </div>

      {/* Deliverables Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          {deliverables.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
              <span className="text-professional-grey font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {deliverables.slice(3).map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
              <span className="text-professional-grey font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-8 text-center hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-professional-grey mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};