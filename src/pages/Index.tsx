import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectOverview } from "@/components/tabs/ProjectOverview";
import { Deliverables } from "@/components/tabs/Deliverables";
import { Investment } from "@/components/tabs/Investment";
import { Maintenance } from "@/components/tabs/Maintenance";
import { Outcome } from "@/components/tabs/Outcome";

const tabs = [
  { id: "overview", label: "Project Overview" },
  { id: "deliverables", label: "Deliverables" },
  { id: "investment", label: "Investment & Pricing" },
  { id: "maintenance", label: "Maintenance & Growth Plan" },
  { id: "outcome", label: "Outcome" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <ProjectOverview />;
      case "deliverables":
        return <Deliverables />;
      case "investment":
        return <Investment />;
      case "maintenance":
        return <Maintenance />;
      case "outcome":
        return <Outcome />;
      default:
        return <ProjectOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero relative overflow-hidden border-b-2 border-white/20">
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10 container mx-auto px-container py-section text-center">
          <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              BeeNext × Troopod
            </h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Website Design & Development Proposal
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional, Growth-Driven Digital Presence for Venture Capital Firms
            </p>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-sm" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/8 rounded-full blur-sm" />
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-light-grey sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-container">
          <nav className="flex overflow-x-auto border-x border-light-grey/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 border-r border-light-grey/30 last:border-r-0",
                  activeTab === tab.id
                    ? "text-troopod-purple border-troopod-purple bg-primary/5"
                    : "text-professional-grey border-transparent hover:text-troopod-purple hover:border-troopod-purple/30"
                )}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-section">
        <div className="container mx-auto px-container">
          <div className="animate-fade-in">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;