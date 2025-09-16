import HeroSection from "@/components/sections/HeroSection";
import StatsBanner from "@/components/common/StatsBanner";
import ClientLogos from "@/components/sections/ClientLogos";
import ServiceCard from "@/components/common/ServiceCard";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import { Database, Zap, Cog, Target, TrendingUp, Shield } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">
              Comprehensive Solutions for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              From data intelligence to automation and technology
              infrastructure, we provide end-to-end solutions that drive
              measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-sm text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="body-md text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-foreground mb-6">
              Why Leading Companies Choose{" "}
              <span className="text-gradient">AgencyPro</span>
            </h2>
            <p className="body-lg text-muted-foreground mb-12">
              We combine deep industry expertise with cutting-edge technology to
              deliver solutions that not just meet your current needs, but
              anticipate future challenges and opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-muted-foreground">
                      Over 500 successful implementations with an average ROI
                      increase of 150%
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Industry Expertise
                    </h3>
                    <p className="text-muted-foreground">
                      Specialized knowledge across technology, finance,
                      healthcare, and e-commerce sectors
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Scalable Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Technology infrastructure that grows with your business,
                      from startup to enterprise
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-muted-foreground">
                      Dedicated support team ensures your systems run smoothly
                      around the clock
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Data-Driven Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Every recommendation backed by comprehensive analysis and
                      market intelligence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Rapid Implementation
                    </h3>
                    <p className="text-muted-foreground">
                      Fast deployment cycles get you seeing results in weeks,
                      not months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionBanner />
    </div>
  );
};

export default Home;
