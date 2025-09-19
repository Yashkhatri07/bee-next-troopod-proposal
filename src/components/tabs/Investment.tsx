import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const inclusions = [
  "Responsive design (desktop, tablet, mobile)",
  "Content Management System (CMS)",
  "SEO optimization & analytics setup", 
  "Deployment & hosting configuration",
  "Documentation & training materials"
];

const normalAMC = [
  "Basic content updates",
  "Bug fixes & maintenance",
  "Security updates", 
  "Hosting & backup support"
];

const growthAMC = [
  "All Normal AMC features",
  "Unlimited content updates",
  "SEO monitoring & optimization",
  "Performance optimization",
  "Monthly analytics reports",
  "UX improvements & A/B testing"
];

export const Investment = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-professional-grey mb-4">
          Investment Structure
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Transparent pricing with comprehensive support options
        </p>
      </div>

      {/* Main Pricing Card */}
      <Card className="p-8 bg-gradient-card border-2 border-troopod-purple/20 shadow-card max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-professional-grey mb-2">
            Website Development
          </h3>
          <div className="text-4xl font-bold text-troopod-purple mb-1">
            ₹1,30,000
            <span className="text-base font-normal text-muted-foreground ml-2">+ GST</span>
          </div>
          <p className="text-muted-foreground">One-time investment</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-professional-grey mb-3">Includes:</h4>
          {inclusions.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
              <span className="text-professional-grey">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* AMC Options */}
      <div>
        <h3 className="text-2xl font-bold text-professional-grey text-center mb-8">
          Annual Maintenance Contract Options
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Normal AMC */}
          <Card className="p-6 bg-gradient-card border border-light-grey/30 shadow-card hover:border-troopod-purple/20 transition-colors">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-professional-grey mb-2">
                Normal AMC
              </h4>
              <div className="text-2xl font-bold text-professional-grey">
                ₹10,000
                <span className="text-sm font-normal text-muted-foreground ml-2">+ GST / Month</span>
              </div>
            </div>

            <div className="space-y-3">
              {normalAMC.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                  <span className="text-sm text-professional-grey">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Growth AMC - Recommended */}
          <Card className="p-6 bg-gradient-card border-2 border-troopod-purple shadow-glow relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success-green hover:bg-success-green text-white">
              <Star className="w-3 h-3 mr-1" />
              Recommended
            </Badge>
            
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-professional-grey mb-2">
                Growth AMC
              </h4>
              <div className="text-2xl font-bold text-troopod-purple">
                ₹25,000
                <span className="text-sm font-normal text-muted-foreground ml-2">+ GST / Month</span>
              </div>
            </div>

            <div className="space-y-3">
              {growthAMC.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                  <span className="text-sm text-professional-grey">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};