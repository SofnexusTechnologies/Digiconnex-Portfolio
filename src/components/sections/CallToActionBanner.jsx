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

  return <section></section>;
};

export default CallToActionBanner;
