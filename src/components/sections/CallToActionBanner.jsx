import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const CallToActionBanner = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Join hundreds of companies that have accelerated their growth with our proven solutions.",
  primaryCta = "Get Started Today",
  primaryCtaLink = "/contact",
  secondaryCta = "Schedule a Call",
  secondaryCtaLink = "/contact",
  theme = "gradient", // "gradient", "primary", "accent"
}) => {
  const getThemeClasses = () => {
    switch (theme) {
      case "primary":
        return "bg-primary text-primary-foreground";
      case "accent":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground";
    }
  };

  return (
    <section className={`section-padding ${getThemeClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl mb-8">
            <Zap className="w-8 h-8 text-accent" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to={primaryCtaLink}
              className="group inline-flex items-center space-x-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={secondaryCtaLink}
              className="group inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <span>{secondaryCta}</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Results Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
