import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = ({
  title,
  subtitle,
  primaryCta = "Get Started",
  primaryCtaLink = "/contact",
  secondaryCta = "Watch Demo",
  backgroundImage, // optional: implement as needed
}) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <div
              className="w-2 h-2 bg-accent rounded-full animate-pulse"
              aria-hidden="true"
            ></div>
            <span className="text-white/90 text-sm font-medium">
              Trusted by 500+ Growing Businesses
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title || (
              <>
                Smarter Data. <br />
                <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Faster Growth.
                </span>
                <br />
                Stronger Businesses.
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle ||
              "Transform your business with our comprehensive data solutions, intelligent automation, and cutting-edge technology services that drive real results."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={primaryCtaLink}
              className="group inline-flex items-center space-x-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              type="button"
              className="group inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>{secondaryCta}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                1M+
              </div>
              <div className="text-white/80">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                99%
              </div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default HeroSection;
