import { Card } from "@/components/ui/card";
import { FileText, Palette, Code, Database, Search, Rocket } from "lucide-react";

const timeline = [
  {
    icon: FileText,
    title: "Wireframes",
    description: "Strategic planning & user flow mapping",
    month: "Month 1"
  },
  {
    icon: Palette,
    title: "UI/UX Design", 
    description: "Beautiful, intuitive interface design",
    month: "Month 1-2"
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "React/Next.js implementation",
    month: "Month 2"
  },
  {
    icon: Database,
    title: "CMS + Database Setup",
    description: "Content management & data structure", 
    month: "Month 2-3"
  },
  {
    icon: Search,
    title: "SEO + Analytics",
    description: "Search optimization & tracking setup",
    month: "Month 3"
  },
  {
    icon: Rocket,
    title: "Testing + Deployment + Training",
    description: "Quality assurance & go-live support",
    month: "Month 3"
  }
];

export const Deliverables = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-professional-grey mb-4">
          3-Month Development Timeline
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Structured approach ensuring quality delivery at every milestone
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {timeline.map((phase, index) => (
          <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300 bg-gradient-card border border-light-grey/30 hover:border-troopod-purple/30 relative">
            <div className="absolute top-4 right-4 text-xs font-medium text-troopod-purple bg-troopod-purple/10 px-2 py-1 rounded-full">
              {phase.month}
            </div>
            
            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 border-2 border-white/20">
              <phase.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-professional-grey mb-2">
              {phase.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {phase.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/50 border border-light-grey/30 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold text-professional-grey mb-3">
          Delivery Guarantee
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Each milestone includes client review and approval process, ensuring the final product exceeds expectations and aligns perfectly with your business objectives.
        </p>
      </div>
    </div>
  );
};