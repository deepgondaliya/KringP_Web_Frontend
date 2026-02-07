import { Building2, User, ArrowRight, AlertCircle, Eye, DollarSign, HelpCircle } from "lucide-react"

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-orange shadow-lg mb-6">
            <AlertCircle className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">
              The Problem
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A Gap That Needed{" "}
            <span className="text-gradient-orange">Bridging</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Two worlds struggling to connect. One platform to unite them.
          </p>
        </div>

        {/* Two Sides */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Businesses Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border rounded-3xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Local Businesses Feel Lost</h3>
              <ul className="space-y-3">
                {[
                  { icon: HelpCircle, text: "Don't know which influencer to choose" },
                  { icon: AlertCircle, text: "Can't verify authenticity or check real data" },
                  { icon: DollarSign, text: "Unsure what to invest or expect in return" },
                  { icon: Eye, text: "No visibility into performance metrics" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Creators Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border rounded-3xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Creators Feel Invisible</h3>
              <ul className="space-y-3">
                {[
                  { icon: Eye, text: "Buried under mega-influencers" },
                  { icon: DollarSign, text: "Undervalued and underpaid for their work" },
                  { icon: AlertCircle, text: "No platform to showcase their true value" },
                  { icon: HelpCircle, text: "Waiting for luck instead of opportunities" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bridge Visual */}
        <div className="mt-12 text-center px-2">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 px-3 sm:px-4 md:px-8 py-2.5 md:py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20 max-w-full overflow-x-auto">
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">Business</span>
            <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
              <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gradient-to-r from-primary/30 to-accent/20" />
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-primary animate-pulse flex-shrink-0" />
              <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gradient-to-r from-primary/30 to-accent/20" />
            </div>
            <span className="font-display font-bold text-primary text-sm sm:text-base md:text-lg whitespace-nowrap">KringP</span>
            <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
              <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gradient-to-r from-accent/20 to-primary/30" />
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-accent animate-pulse flex-shrink-0" />
              <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gradient-to-r from-accent/20 to-primary/30" />
            </div>
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">Creator</span>
          </div>
          <p className="mt-4 text-base md:text-xl font-display font-medium">
            <span className="text-gradient-orange">KringP</span> was born to close this gap.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection