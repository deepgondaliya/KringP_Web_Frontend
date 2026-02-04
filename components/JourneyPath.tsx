'use client'

import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
}

interface JourneyPathProps {
  steps: JourneyStep[];
}

const JourneyPath = ({ steps }: JourneyPathProps) => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <div className="relative py-12">
      {/* SVG Curved Path */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full max-w-4xl pointer-events-none"
        viewBox="0 0 800 1600"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background path (subtle) */}
        <path
          d="M 400 0 
             C 400 100, 150 150, 150 250
             S 650 350, 650 450
             S 150 550, 150 650
             S 650 750, 650 850
             S 150 950, 150 1050
             S 650 1150, 650 1250
             S 400 1350, 400 1600"
          stroke="hsl(var(--primary))"
          strokeOpacity="0.1"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Animated path */}
        <path
          d="M 400 0 
             C 400 100, 150 150, 150 250
             S 650 350, 650 450
             S 150 550, 150 650
             S 650 750, 650 850
             S 150 950, 150 1050
             S 650 1150, 650 1250
             S 400 1350, 400 1600"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          strokeDasharray="2400"
          strokeDashoffset={2400 - (visibleSteps.length / steps.length) * 2400}
          className="transition-all duration-1000 ease-out"
        />

        {/* Glowing dots at each step position */}
        {steps.map((_, index) => {
          const isVisible = visibleSteps.includes(index);
          const yPosition = 250 + index * 200;
          const xPosition = index % 2 === 0 ? 150 : 650;
          
          return (
            <circle
              key={index}
              cx={xPosition}
              cy={yPosition}
              r={isVisible ? 12 : 8}
              fill={isVisible ? "hsl(var(--primary))" : "hsl(var(--muted))"}
              className="transition-all duration-500"
              filter={isVisible ? "url(#glow)" : ""}
            />
          );
        })}
      </svg>

      {/* Steps Content */}
      <div className="relative z-10 space-y-24 md:space-y-32">
        {steps.map((step, index) => {
          const isVisible = visibleSteps.includes(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              data-index={index}
              className={`flex items-center gap-8 md:gap-16 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div
                className={`flex-1 transition-all duration-700 ${
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
                  } ${isLeft ? "ml-auto mr-8 md:mr-16" : "mr-auto ml-8 md:ml-16"} max-w-md`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isVisible
                          ? "bg-gradient-orange shadow-lg"
                          : "bg-muted"
                      }`}
                    >
                      <step.icon
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

              {/* Center spacer for the path */}
              <div className="hidden md:block w-32" />

              {/* Empty space on other side */}
              <div className="flex-1 hidden md:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyPath;