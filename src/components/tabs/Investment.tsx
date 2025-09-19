import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const inclusions = [
  "Responsive design (desktop, tablet, mobile)",
  "Content Management System (CMS)",
  "SEO optimization & analytics setup", 
  "Deployment & hosting configuration",
  "Documentation & training materials",
  "Basic content updates",
"Bug fixes & maintenance",
"Security updates", 
"Hosting & backup support"
];

// const normalAMC = [
//   "Basic content updates",
//   "Bug fixes & maintenance",
//   "Security updates", 
//   "Hosting & backup support"
// ];

// const growthAMC = [
//   "All Normal AMC features",
//   "Unlimited content updates",
//   "SEO monitoring & optimization",
//   "Performance optimization",
//   "Monthly analytics reports",
//   "UX improvements & A/B testing"
//   "3 landing pages for each quater"
// ];

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
            Website Development + Annual Maintenance Cost
          </h3>
          <div className="text-4xl font-bold text-troopod-purple mb-1">
            ₹1,50,000
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

     

          
        </div>
  
  );
};
