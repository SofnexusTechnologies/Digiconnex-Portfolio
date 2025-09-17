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
} from "lucide-react";

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

  return <div className="min-h-screen"></div>;
};

export default Home;
