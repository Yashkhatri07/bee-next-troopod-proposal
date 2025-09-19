export const Outcome = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-8">
        <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
        
        <h2 className="text-3xl font-bold text-professional-grey mb-8">
          Expected Outcome
        </h2>
        
        <p className="text-xl leading-relaxed text-professional-grey font-medium">
          A fully functional, SEO-friendly, secure, and scalable VC website designed for BeeNext, 
          ensuring long-term reliability and growth.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-troopod-purple mb-2">100%</div>
            <p className="text-muted-foreground">Functional & Tested</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-troopod-purple mb-2">SEO</div>
            <p className="text-muted-foreground">Optimized & Ready</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-troopod-purple mb-2">∞</div>
            <p className="text-muted-foreground">Scalable Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};