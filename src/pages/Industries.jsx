import IndustryCard from "@/components/common/IndustryCard";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import {
  Monitor,
  Building,
  Truck,
  Users,
  ShoppingCart,
  Heart,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Monitor,
      title: "Technology",
      description:
        "Accelerate growth for SaaS, software, and tech companies with data-driven solutions that scale with rapid expansion and evolving market demands.",
      services: [
        "Lead generation for B2B software",
        "Product adoption analytics",
        "Customer success automation",
        "Technical integration support",
      ],
      stats: { companies: "200+", growth: "180%" },
      challenges:
        "Rapid scaling, customer acquisition costs, product-market fit validation",
      solutions:
        "Advanced lead scoring, automated onboarding, growth analytics",
    },
    {
      icon: Building,
      title: "Financial Services",
      description:
        "Enhance client acquisition and compliance for banks, fintech, and investment firms with secure, regulation-compliant technology solutions.",
      services: [
        "Compliance-ready data solutions",
        "Risk assessment automation",
        "Client onboarding workflows",
        "Regulatory reporting systems",
      ],
      stats: { companies: "85+", growth: "145%" },
      challenges: "Regulatory compliance, client trust, digital transformation",
      solutions:
        "Secure data handling, automated compliance checks, client portals",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description:
        "Optimize operations and improve efficiency for logistics companies with real-time tracking, automation, and predictive analytics solutions.",
      services: [
        "Supply chain visibility platforms",
        "Predictive maintenance systems",
        "Route optimization algorithms",
        "Inventory management automation",
      ],
      stats: { companies: "120+", growth: "160%" },
      challenges:
        "Supply chain visibility, cost optimization, operational efficiency",
      solutions:
        "Real-time tracking, predictive analytics, automated workflows",
    },
    {
      icon: Users,
      title: "HR & Staffing",
      description:
        "Transform talent acquisition and management for staffing agencies and HR departments with automated screening, matching, and onboarding solutions.",
      services: [
        "Candidate sourcing automation",
        "Skills-based matching systems",
        "Onboarding workflow management",
        "Performance tracking platforms",
      ],
      stats: { companies: "90+", growth: "170%" },
      challenges: "Talent sourcing, candidate matching, retention rates",
      solutions:
        "AI-powered matching, automated screening, engagement tracking",
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "Boost online sales and customer engagement for retailers with personalization engines, inventory optimization, and customer journey automation.",
      services: [
        "Customer behavior analytics",
        "Personalization engines",
        "Inventory optimization systems",
        "Multi-channel marketing automation",
      ],
      stats: { companies: "150+", growth: "195%" },
      challenges: "Customer acquisition, inventory management, personalization",
      solutions:
        "Behavioral targeting, demand forecasting, omnichannel experiences",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Improve patient outcomes and operational efficiency for healthcare providers with HIPAA-compliant solutions and patient engagement platforms.",
      services: [
        "Patient engagement platforms",
        "Appointment scheduling automation",
        "Clinical workflow optimization",
        "Compliance management systems",
      ],
      stats: { companies: "65+", growth: "135%" },
      challenges:
        "Patient engagement, regulatory compliance, operational efficiency",
      solutions:
        "Secure patient portals, automated workflows, compliance monitoring",
    },
  ];

  const successMetrics = [
    {
      icon: TrendingUp,
      metric: "165%",
      label: "Average Revenue Growth",
      description: "Across all industries served",
    },
    {
      icon: Shield,
      metric: "99.9%",
      label: "Compliance Rate",
      description: "For regulated industries",
    },
    {
      icon: Zap,
      metric: "60%",
      label: "Process Efficiency Gain",
      description: "Through automation solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industry-Specific <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            We understand that every industry has unique challenges,
            regulations, and opportunities. Our specialized solutions are
            tailored to drive success in your specific market.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              >
                <metric.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-white/70 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our deep industry expertise allows us to create solutions that
              address specific regulatory requirements, market dynamics, and
              operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                services={industry.services}
                link="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Specialization Matters */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Industry Expertise{" "}
                <span className="text-gradient">Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Generic solutions often fall short. Our industry-specific
                approach ensures faster implementation, better compliance, and
                superior results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Regulatory Compliance
                    </h3>
                    <p className="text-muted-foreground">
                      Built-in compliance for HIPAA, SOX, GDPR, and other
                      industry-specific regulations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Faster Time-to-Value
                    </h3>
                    <p className="text-muted-foreground">
                      Pre-built workflows and templates designed for your
                      industry's specific needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Proven Methodologies
                    </h3>
                    <p className="text-muted-foreground">
                      Battle-tested approaches refined through hundreds of
                      successful implementations
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Industry Benchmarks
                    </h3>
                    <p className="text-muted-foreground">
                      Performance metrics and KPIs tailored to your industry
                      standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Specialized Integrations
                    </h3>
                    <p className="text-muted-foreground">
                      Native connections to industry-standard tools and
                      platforms
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Expert Support Team
                    </h3>
                    <p className="text-muted-foreground">
                      Dedicated specialists with deep knowledge of your industry
                      challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionBanner
        title="Ready to See Industry-Specific Results?"
        subtitle="Discover how our specialized solutions can address your industry's unique challenges and opportunities."
        primaryCta="Book Industry Consultation"
        secondaryCta="View Success Stories"
        secondaryCtaLink="/case-studies"
      />
    </div>
  );
};

export default Industries;
