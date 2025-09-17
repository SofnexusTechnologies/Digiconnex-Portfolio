import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToActionBanner = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Join hundreds of companies accelerating growth with our solutions.",
  primaryCta = "Get Started Today",
  primaryCtaLink = "/contact",
  secondaryCta = "Schedule a Call",
  secondaryCtaLink = "/contact",
  theme = "gradient", // "gradient", "primary", "accent", "light"
  align = "center", // "center", "left"
}) => {
  // Theme Styles
  const getThemeClasses = () => {
    switch (theme) {
      case "primary":
        return "bg-primary text-primary-foreground";
      case "accent":
        return "bg-accent text-accent-foreground";
      case "light":
        return "bg-muted text-foreground";
      default:
        return "bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground";
    }
  };

  // Alignment Styles
  const alignmentClasses =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center justify-center";

  return (
    <section
      className={`${getThemeClasses()} rounded-2xl shadow-lg overflow-hidden`}
    >
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col ${alignmentClasses} gap-6`}
        >
          {/* Title & Subtitle */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Link
                to={primaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-md"
              >
                {primaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-current hover:bg-white/10 transition-all"
              >
                {secondaryCta}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
