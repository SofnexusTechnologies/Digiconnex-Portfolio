import HeroSection from "@/components/sections/HeroSection";
import StatsBanner from "@/components/common/StatsBanner";
import ClientLogos from "@/components/sections/ClientLogos";
import ServiceCard from "@/components/common/ServiceCard";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import {
  Database,
  Zap,
  Cog,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Database,
      title: "B2B Data Solutions",
      description:
        "Unlock the power of precise, actionable B2B data to fuel your sales and marketing efforts with our comprehensive data intelligence platform.",
      features: [
        "Real-time data enrichment",
        "Lead scoring and qualification",
        "Contact and company intelligence",
        "Data cleansing and validation",
      ],
      link: "/services#data",
    },
    {
      icon: Zap,
      title: "Automation Services",
      description:
        "Streamline your operations with intelligent automation solutions that eliminate manual processes and accelerate your business growth.",
      features: [
        "Workflow automation",
        "Email marketing automation",
        "CRM integration and sync",
        "Custom automation workflows",
      ],
      link: "/services#automation",
    },
    {
      icon: Cog,
      title: "Technology Solutions",
      description:
        "Transform your business with cutting-edge technology infrastructure that scales with your growth and adapts to market changes.",
      features: [
        "Cloud integration services",
        "API development and integration",
        "Business intelligence platforms",
        "Custom software development",
      ],
      link: "/services#technology",
    },
  ];

  const additionalFeatures = [
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach your ideal customers with laser-focused targeting strategies based on comprehensive data analysis.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description:
        "Track, measure, and optimize your performance with advanced analytics and real-time reporting dashboards.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Enterprise-grade security protocols ensure your business data remains protected and compliant.",
    },
  ];

  const whyChooseUsFeatures = [
    {
      title: "Proven Track Record",
      description:
        "Over 500 successful implementations with an average ROI increase of 150%",
    },
    {
      title: "Industry Expertise",
      description:
        "Specialized knowledge across technology, finance, healthcare, and e-commerce sectors",
    },
    {
      title: "Scalable Solutions",
      description:
        "Technology infrastructure that grows with your business, from startup to enterprise",
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated support team ensures your systems run smoothly around the clock",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Every recommendation backed by comprehensive analysis and market intelligence",
    },
    {
      title: "Rapid Implementation",
      description:
        "Fast deployment cycles get you seeing results in weeks, not months",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Client Logos */}
      <ClientLogos />

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Our Core Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Solutions for{" "}
              <span className="text-gradient-primary">Modern Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From data intelligence to automation and technology
              infrastructure, we provide end-to-end solutions that drive
              measurable growth and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                link={service.link}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 btn-cta"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Leading Companies{" "}
              <span className="text-gradient-accent">Choose DigiConnex</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We combine cutting-edge technology with deep industry expertise to
              deliver solutions that transform businesses and accelerate growth.
            </p>
          </div>

          <div className="feature-grid mb-16">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="feature-icon">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-card/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Trusted Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Built for <span className="text-gradient-primary">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our commitment to excellence and innovation has made us the
              preferred partner for businesses looking to scale and optimize
              their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 text-balance">
                "DigiConnex transformed our entire sales process. We've seen a
                180% increase in qualified leads and reduced our sales cycle by
                40%. Their team's expertise and dedication to our success has
                been exceptional."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">Sarah Johnson</div>
                  <div className="text-muted-foreground">
                    VP of Sales, TechCorp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CallToActionBanner />
    </div>
  );
};

export default Home;
