import { useState } from "react";
import { Database, Zap, Cog, ChevronDown, Check } from "lucide-react";
import CallToActionBanner from "@/components/sections/CallToActionBanner";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "data",
      icon: Database,
      title: "B2B Data Solutions",
      subtitle: "Precision-targeted data intelligence for accelerated growth",
      description:
        "Transform your sales and marketing efforts with our comprehensive B2B data platform that delivers accurate, real-time insights about your prospects and customers.",
      features: [
        "Real-time Contact & Company Enrichment",
        "Advanced Lead Scoring & Qualification",
        "Intent Data & Buying Signals",
        "Data Cleansing & Validation",
        "CRM Integration & Synchronization",
        "Custom Data Attributes & Fields",
      ],
      benefits: [
        "Increase lead conversion rates by 40%",
        "Reduce data entry time by 75%",
        "Improve sales productivity by 60%",
        "Ensure 95%+ data accuracy",
      ],
      useCases: [
        {
          title: "Sales Acceleration",
          description:
            "Identify high-intent prospects and personalize outreach with detailed company and contact insights.",
        },
        {
          title: "Marketing Personalization",
          description:
            "Create targeted campaigns based on firmographic, technographic, and behavioral data.",
        },
        {
          title: "Account-Based Marketing",
          description:
            "Build comprehensive account profiles for strategic ABM campaigns.",
        },
      ],
    },
    {
      id: "automation",
      icon: Zap,
      title: "Automation Services",
      subtitle: "Intelligent workflows that eliminate manual processes",
      description:
        "Streamline your operations with smart automation solutions that handle repetitive tasks, nurture leads, and optimize your entire sales and marketing funnel.",
      features: [
        "Multi-channel Marketing Automation",
        "Lead Nurturing Sequences",
        "Sales Workflow Automation",
        "Custom API Integrations",
        "Behavioral Trigger Campaigns",
        "A/B Testing & Optimization",
      ],
      benefits: [
        "Save 20+ hours per week on manual tasks",
        "Increase email engagement by 35%",
        "Accelerate sales cycles by 30%",
        "Improve lead qualification efficiency by 50%",
      ],
      useCases: [
        {
          title: "Lead Nurturing",
          description:
            "Automated sequences that guide prospects through your sales funnel with personalized content.",
        },
        {
          title: "Customer Onboarding",
          description:
            "Seamless workflows that ensure new customers get maximum value from your solutions.",
        },
        {
          title: "Sales Enablement",
          description:
            "Automated alerts, scoring, and handoffs that help sales teams focus on high-value activities.",
        },
      ],
    },
    {
      id: "technology",
      icon: Cog,
      title: "End-to-End Technology Solutions",
      subtitle: "Scalable infrastructure for modern business growth",
      description:
        "Build a robust technology foundation with our comprehensive solutions that integrate seamlessly with your existing systems and scale with your business needs.",
      features: [
        "Cloud Infrastructure Setup",
        "API Development & Integration",
        "Business Intelligence Platforms",
        "Custom Software Development",
        "System Architecture Consulting",
        "Performance Monitoring & Analytics",
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve system reliability by 99.9%",
        "Accelerate development cycles by 50%",
        "Enhance data security and compliance",
      ],
      useCases: [
        {
          title: "Digital Transformation",
          description:
            "Modernize legacy systems and processes with cloud-native solutions and automation.",
        },
        {
          title: "Integration Solutions",
          description:
            "Connect disparate systems and create unified data workflows across your organization.",
        },
        {
          title: "Custom Development",
          description:
            "Build tailored applications that solve specific business challenges and requirements.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive{" "}
            <span className="text-accent">Business Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            From data intelligence to automation and technology infrastructure,
            we provide integrated solutions that drive measurable results and
            sustainable growth.
          </p>

          {/* Service Navigation */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeService === index
                    ? "bg-accent text-accent-foreground"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${activeService === index ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-accent font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="card-elegant p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  Core Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="card-elegant p-6 text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg mx-auto mb-4"></div>
                      <h4 className="font-medium text-foreground">{feature}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  Real-World Applications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {service.useCases.map((useCase, idx) => (
                    <div key={idx} className="card-elegant p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {useCase.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Proven Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure successful
              implementation and maximum ROI from your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Comprehensive assessment of your current systems, processes, and goals.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description:
                  "Custom solution design with clear timelines, milestones, and success metrics.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Phased rollout with continuous testing, optimization, and team training.",
              },
              {
                step: "04",
                title: "Optimization & Support",
                description:
                  "Ongoing monitoring, improvements, and 24/7 support for sustained success.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionBanner
        title="Ready to Accelerate Your Growth?"
        subtitle="Let's discuss how our solutions can be customized to meet your specific business needs and objectives."
        primaryCta="Schedule Consultation"
        secondaryCta="View Case Studies"
        secondaryCtaLink="/case-studies"
      />
    </div>
  );
};

export default Services;
