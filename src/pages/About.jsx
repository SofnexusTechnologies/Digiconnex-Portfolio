import { Users, Target, Zap, TrendingUp, Shield } from "lucide-react";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every solution we build is designed with measurable outcomes in mind. We're not satisfied unless you're seeing real, quantifiable results.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to ensure our clients always have access to the most advanced and effective solutions available.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your data and business operations are secure with us. We maintain the highest standards of security and compliance across all industries.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We work as an extension of your team, understanding your business deeply and partnering with you for long-term success.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description:
        "Started with a mission to democratize data intelligence for growing businesses",
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description:
        "Achieved our first major milestone by helping 100 companies transform their operations",
    },
    {
      year: "2021",
      title: "Automation Launch",
      description:
        "Expanded services to include comprehensive marketing and sales automation solutions",
    },
    {
      year: "2022",
      title: "Enterprise Focus",
      description:
        "Scaled to serve enterprise clients with complex, multi-system integrations",
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description:
        "Recognized as a leading provider of B2B data and automation solutions",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Launched AI-powered features for predictive analytics and intelligent automation",
    },
  ];

  const leadership = [
    {
      name: "Mohammed Varaliya",
      role: "CEO & Founder",
      bio: "Former VP of Engineering at leading SaaS companies with 15+ years building scalable technology solutions.",
      expertise: "Technology Strategy, Product Development",
    },
    {
      name: "Mohammed Varaliya",
      role: "CTO",
      bio: "Ex-Google engineer with deep expertise in data systems, machine learning, and enterprise architecture.",
      expertise: "Data Engineering, AI/ML, System Architecture",
    },
    {
      name: "Mohammed Varaliya",
      role: "VP of Customer Success",
      bio: "Customer success leader with a track record of achieving 95%+ retention rates at high-growth companies.",
      expertise: "Customer Success, Implementation, Training",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Deep Discovery",
      description:
        "We start by understanding your business, goals, challenges, and current technology landscape through comprehensive analysis.",
      details: [
        "Stakeholder interviews",
        "System audit",
        "Process mapping",
        "Goal alignment",
      ],
    },
    {
      step: "02",
      title: "Strategic Design",
      description:
        "Our experts design a custom solution architecture that integrates seamlessly with your existing systems and scales with growth.",
      details: [
        "Solution architecture",
        "Integration planning",
        "Scalability design",
        "Risk assessment",
      ],
    },
    {
      step: "03",
      title: "Phased Implementation",
      description:
        "We implement solutions in carefully planned phases, ensuring minimal disruption while delivering quick wins and measurable progress.",
      details: [
        "Milestone planning",
        "Testing protocols",
        "Team training",
        "Progress monitoring",
      ],
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description:
        "Post-launch, we provide ongoing optimization, monitoring, and support to ensure peak performance and evolving business needs.",
      details: [
        "Performance monitoring",
        "Regular optimization",
        "Feature updates",
        "24/7 support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            About <span className="text-gradient-primary">DigiConnex</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We empower businesses with data-driven insights, automation, and
            technology solutions that deliver measurable results and sustainable
            growth.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient-accent">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient-primary">Journey</span>
          </h2>
          <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[33px] w-6 h-6 bg-gradient-accent rounded-full border-4 border-background dark:border-card shadow-lg"></div>
                <h3 className="text-lg font-bold">
                  {ms.year} - {ms.title}
                </h3>
                <p className="text-muted-foreground">{ms.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet the <span className="text-gradient-accent">Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-muted-foreground mb-3">{leader.bio}</p>
                <p className="text-sm text-accent font-medium">
                  Expertise: {leader.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient-primary">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center font-bold text-primary mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {step.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container-custom">
        <CallToActionBanner
          title="Ready to Work With Us?"
          subtitle="Partner with DigiConnex and take the next big step toward your growth goals."
          primaryCta="Start Your Project"
          secondaryCta="Schedule a Consultation"
          theme="gradient"
        />
      </div>
    </div>
  );
};

export default About;
