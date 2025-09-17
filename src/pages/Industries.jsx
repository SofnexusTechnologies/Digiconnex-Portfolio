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
import { motion } from "framer-motion";

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
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Industries We{" "}
              <span className="text-gradient-primary">Empower</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From technology to healthcare, we help organizations unlock
              growth, improve efficiency, and stay ahead of the competition with
              innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 rounded-xl p-6 shadow-sm hover:shadow-lg border border-border/50 transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-accent rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {metric.metric}
                </h3>
                <p className="text-lg font-medium">{metric.label}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              {...industry}
              link={`/industries/${industry.title.toLowerCase()}`}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <div className="container-custom">
        <CallToActionBanner
          title="Partner with Us to Unlock Your Industry's Potential"
          subtitle="Whether you're in tech, retail, or healthcare, our tailored solutions will help you grow faster, smarter, and more efficiently."
          primaryCta="Explore Case Studies"
          primaryCtaLink="/case-studies"
          secondaryCta="Talk to an Expert"
          secondaryCtaLink="/contact"
        />
      </div>
    </div>
  );
};

export default Industries;
