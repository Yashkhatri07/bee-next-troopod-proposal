import { Card } from "@/components/ui/card";
import { Shield, RefreshCw, Lock, Server, TrendingUp, Search, BarChart3, MousePointer, Zap } from "lucide-react";

const maintenanceServices = [
  {
    icon: Shield,
    title: "Bug Fixes",
    description: "Quick resolution of any technical issues"
  },
  {
    icon: RefreshCw,
    title: "CMS Updates",
    description: "Regular content management system updates"
  },
  {
    icon: Lock,
    title: "Security",
    description: "Ongoing security monitoring and patches"
  },
  {
    icon: Server,
    title: "Hosting",
    description: "Reliable hosting and server management"
  }
];

const growthServices = [
  {
    icon: TrendingUp,
    title: "Page Speed",
    description: "Continuous performance optimization"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Search engine ranking improvements"
  },
  {
    icon: BarChart3,
    title: "Audit Reports",
    description: "Monthly performance and analytics insights"
  },
  {
    icon: MousePointer,
    title: "Heatmaps",
    description: "User behavior analysis and tracking"
  },
  {
    icon: Zap,
    title: "UX Enhancements",
    description: "User experience improvements and A/B testing"
  }
];

export const Maintenance = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-professional-grey mb-4">
          Comprehensive Support & Growth
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ensuring your website remains secure, fast, and continuously improving
        </p>
      </div>

      {/* Maintenance Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-professional-grey text-center mb-8">
          Core Maintenance Services
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maintenanceServices.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-troopod-purple" />
              </div>
              <h4 className="text-lg font-semibold text-professional-grey mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Growth Plan Section */}
      <div>
        <h3 className="text-2xl font-semibold text-professional-grey text-center mb-8">
          Growth & Optimization Services
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {growthServices.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-professional-grey mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-troopod-purple/5 border border-troopod-purple/20 rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold text-professional-grey mb-3">
            Proactive Growth Strategy
          </h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our growth plan ensures your website doesn't just maintain its performance—it continuously evolves to meet changing user needs and business objectives, driving better engagement and conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};