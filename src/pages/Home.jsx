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
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    {
      icon: Database,
      title: "B2B Data Solutions",
      description:
        "Unlock precise, actionable B2B data to fuel your growth with our intelligence platform.",
      features: [
        "Real-time data enrichment",
        "Lead scoring & qualification",
        "Contact & company intelligence",
        "Data cleansing & validation",
      ],
      link: "/services#data",
    },
    {
      icon: Zap,
      title: "Automation Services",
      description:
        "Streamline operations with automation that removes manual work and accelerates results.",
      features: [
        "Workflow automation",
        "Email campaigns",
        "CRM sync & integration",
        "Custom automation flows",
      ],
      link: "/services#automation",
    },
    {
      icon: Cog,
      title: "Technology Solutions",
      description:
        "Transform your infrastructure with modern, scalable tech built for growth and agility.",
      features: [
        "Cloud integrations",
        "API development",
        "BI dashboards",
        "Custom software",
      ],
      link: "/services#technology",
    },
  ];

  const additionalFeatures = [
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach your ideal audience with data-driven targeting strategies.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description:
        "Track, measure, and optimize your campaigns with real-time insights.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Enterprise-grade encryption keeps your data safe and compliant.",
    },
  ];

  const whyChooseUsFeatures = [
    {
      title: "Proven Track Record",
      description: "500+ successful projects with 150% average ROI increase",
    },
    {
      title: "Industry Expertise",
      description:
        "Specialized teams across tech, finance, healthcare & e-commerce",
    },
    {
      title: "Scalable Solutions",
      description:
        "Infrastructure that grows with your business – startup to enterprise",
    },
    {
      title: "24/7 Support",
      description: "Always-on support team ensures smooth operations",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Every recommendation backed by actionable analytics & research",
    },
    {
      title: "Rapid Implementation",
      description: "Get results in weeks, not months, with our agile approach",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-gradient-accent">
                Data & Automation
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              DigiConnex helps modern businesses scale faster with cutting-edge
              B2B data, intelligent automation, and future-ready technology
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <StatsBanner />

      {/* CLIENT LOGOS */}
      <ClientLogos />

      {/* SERVICES SECTION */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 px-4">
            <span className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">
              <Star className="w-4 h-4 mr-1" /> Our Core Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Solutions for{" "}
              <span className="text-gradient-primary">Modern Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From data intelligence to automation, we deliver end-to-end
              solutions that drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-md"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Leading Companies{" "}
              <span className="text-gradient-accent">Choose DigiConnex</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              We combine cutting-edge tech and deep industry knowledge to
              deliver growth-focused solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container-custom">
          <div className="text-center mb-12 px-4">
            <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-card/70 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-medium text-primary">
                Trusted Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for <span className="text-gradient-primary">Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
            {whyChooseUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 shadow-card hover:shadow-elegant hover:border-primary/20 transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                    <CheckCircle className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto text-center px-4">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-accent w-6 h-6 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
            "DigiConnex transformed our sales process — 180% more qualified
            leads and a 40% shorter sales cycle. Their expertise is unmatched."
          </blockquote>
          <div className="flex justify-center items-center gap-4">
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
              <Users className="text-white w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">Sarah Johnson</p>
              <p className="text-muted-foreground text-sm">
                VP of Sales, TechCorp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="container-custom">
        <CallToActionBanner
          title="Ready to Transform Your Business?"
          subtitle="Join hundreds of companies accelerating growth with our solutions."
          primaryCta="Get Started"
          primaryCtaLink="/contact"
          secondaryCta="Learn More"
          secondaryCtaLink="/about"
        />
      </div>
    </div>
  );
};

export default Home;
