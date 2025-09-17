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
import { motion, AnimatePresence } from "framer-motion";

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
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-1" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Comprehensive Solutions for{" "}
              <span className="text-gradient-primary">Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From data intelligence to automation and technology
              infrastructure, we provide end-to-end solutions that deliver
              measurable growth and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Services Tabs */}
      <section className="py-6 bg-card border-b border-border sticky top-16 z-40 backdrop-blur-md">
        <div className="container-custom flex flex-wrap justify-center gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm shadow-sm transition-all duration-300 ${
                  activeService === index
                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {services.map((service, index) => {
              const Icon = service.icon;
              if (activeService !== index) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold">
                            {service.title}
                          </h2>
                          <p className="text-lg text-primary font-medium">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-md"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    <div className="space-y-8">
                      {/* Features */}
                      <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5 text-primary" />
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-foreground"
                            >
                              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                          <TrendingUp className="w-5 h-5 text-secondary" />
                          Expected Results
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-foreground"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <span className="font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10">
                      Common Use Cases
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {service.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
                        >
                          <h4 className="text-lg font-semibold mb-3">
                            {useCase.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient-accent">Proven Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We follow a systematic approach to ensure successful implementation
            and maximum ROI for every client.
          </p>

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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl font-bold text-white">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="container-custom">
        <CallToActionBanner
          title="Let's Build Your Growth Engine"
          subtitle="Partner with us to unlock your company's full potential with data, automation, and technology."
          primaryCta="Start Your Project"
          primaryCtaLink="/contact"
          secondaryCta="Talk to an Expert"
          secondaryCtaLink="/contact"
        />
      </div>
    </div>
  );
};

export default Services;
