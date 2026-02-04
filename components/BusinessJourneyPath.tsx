'use client'

import { useEffect, useRef, useState } from "react";
import { UserPlus, Search, Filter, MessageSquare, FileCheck, CreditCard, Rocket } from "lucide-react";

interface JourneyStep {
  iconName: string;
  title: string;
  description: string;
  details?: string[];
}

interface JourneyPathProps {
  steps: JourneyStep[];
}

const BusinessJourneyPath = ({ steps }: JourneyPathProps) => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    const icons = {
      UserPlus,
      Search,
      Filter,
      MessageSquare,
      FileCheck,
      CreditCard,
      Rocket
    };
    return icons[iconName as keyof typeof icons];
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // More aggressive scroll calculation to ensure full completion
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start when section enters viewport, complete when section is mostly scrolled past
      const startPoint = windowHeight * 0.9;
      const endPoint = -sectionHeight * 0.5;
      
      const progress = Math.max(0, Math.min(1, 
        (startPoint - sectionTop) / (startPoint - endPoint)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* SVG Curved Path */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full max-w-4xl pointer-events-none"
        viewBox="0 0 800 1400"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          <linearGradient id="businessPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
          <filter id="businessGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background path (subtle) */}
        <path
          d="M 400 50 
             C 400 120, 150 170, 150 240
             S 650 340, 650 410
             S 150 510, 150 580
             S 650 680, 650 750
             S 150 850, 150 920
             S 650 1020, 650 1090
             S 400 1190, 400 1550"
          stroke="hsl(var(--primary))"
          strokeOpacity="0.1"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Animated path */}
        <path
          d="M 400 50 
             C 400 120, 150 170, 150 240
             S 650 340, 650 410
             S 150 510, 150 580
             S 650 680, 650 750
             S 150 850, 150 920
             S 650 1020, 650 1090
             S 400 1190, 400 1550"
          stroke="url(#businessPathGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter="url(#businessGlow)"
          strokeDasharray="2000"
          strokeDashoffset={2000 - (scrollProgress * 2000)}
          className="transition-all duration-75 ease-out"
        />

        {/* Glowing dots at each step position */}
        {steps.map((_, index) => {
          const isVisible = visibleSteps.includes(index);
          const yPositions = [240, 410, 580, 750, 920, 1090];
          const yPosition = yPositions[index] || 240 + index * 170;
          const xPosition = index % 2 === 0 ? 150 : 650;
          
          return (
            <circle
              key={index}
              cx={xPosition}
              cy={yPosition}
              r={isVisible ? 12 : 8}
              fill={isVisible ? "hsl(var(--primary))" : "hsl(var(--muted))"}
              className="transition-all duration-500"
              filter={isVisible ? "url(#businessGlow)" : ""}
            />
          );
        })}
      </svg>

      {/* Steps Content */}
      <div className="relative z-10">
        {steps.map((step, index) => {
          const isVisible = visibleSteps.includes(index);
          const isLeft = index % 2 === 0;
          const IconComponent = getIcon(step.iconName);

          return (
            <div
              key={index}
              ref={(el) => { stepRefs.current[index] = el; }}
              data-index={index}
              className="relative flex items-center justify-center min-h-[180px] mb-12 last:mb-0"
            >
              {/* Content Card */}
              <div
                className={`absolute ${isLeft ? 'left-0' : 'right-0'} w-full max-w-md transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
                }`}
              >
                <div
                  className={`p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border transition-all duration-500 ${
                    isVisible
                      ? "border-primary/50 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isVisible
                          ? "bg-gradient-orange shadow-lg"
                          : "bg-muted"
                      }`}
                    >
                      <IconComponent
                        className={`w-7 h-7 transition-colors duration-500 ${
                          isVisible ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div>
                      <span
                        className={`text-sm font-medium transition-colors duration-500 ${
                          isVisible ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        Step {index + 1}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  {step.details && (
                    <ul className="space-y-2">
                      {step.details.map((detail, dIndex) => (
                        <li
                          key={dIndex}
                          className={`flex items-center gap-2 text-sm transition-all duration-500 ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: `${dIndex * 100 + 300}ms` }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessJourneyPath;