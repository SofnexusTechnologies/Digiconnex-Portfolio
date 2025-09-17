import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = ({
  title = "Transform Your Business with Data-Driven Marketing Solutions",
  subtitle = "Unlock unprecedented growth with our cutting-edge B2B data solutions, intelligent automation, and technology infrastructure that scales with your ambitions.",
  primaryCta = "Get Started",
  primaryCtaLink = "/contact",
  secondaryCta = "Watch Demo",
  backgroundImage,
}) => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: TrendingUp, value: "150%", label: "Average ROI" },
    { icon: Award, value: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-medium">
              Trusted by 500+ Companies
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Transform Your Business with{" "}
            <span className="text-accent">Data-Driven</span> Marketing Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto text-pretty leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover-lift"
            >
              <Link to={primaryCtaLink} className="flex items-center space-x-2">
                <span>{primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              {secondaryCta}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
