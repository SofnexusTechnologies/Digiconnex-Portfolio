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

  return <div className="min-h-screen"></div>;
};

export default Industries;
