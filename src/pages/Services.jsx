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

  return <div className="min-h-screen"></div>;
};

export default Services;
