import { useState } from "react";
import {
  Database,
  Zap,
  Cog,
  Check,
  ArrowRight,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import { Link } from "react-router-dom";

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
      <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Solutions for{" "}
              <span className="text-gradient-primary">Business Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              From data intelligence to automation and technology
              infrastructure, we provide end-to-end solutions that drive
              measurable growth and operational excellence for modern
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-primary text-white shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeService === index
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-lg text-primary font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 btn-cta"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="space-y-8">
                    {/* Features */}
                    <div className="card-elegant p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                        <Target className="w-5 h-5 text-primary" />
                        <span>Key Features</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="card-elegant p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-secondary" />
                        <span>Expected Results</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-foreground font-medium">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                    Common Use Cases
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.useCases.map((useCase, idx) => (
                      <div key={idx} className="feature-card">
                        <h4 className="text-lg font-bold text-foreground mb-3">
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
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-accent">Proven Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful
              implementation and maximum ROI for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Deep dive into your business needs, current systems, and growth objectives.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description:
                  "Develop a customized roadmap with clear milestones and success metrics.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Execute the plan with minimal disruption to your ongoing operations.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and refinement to maximize performance and ROI.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CallToActionBanner />
    </div>
  );
};

export default Services;
