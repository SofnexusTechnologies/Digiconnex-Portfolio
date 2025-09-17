import { Users, Target, Zap, TrendingUp, Shield } from "lucide-react";
import CallToActionBanner from "@/components/sections/CallToActionBanner";

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
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former VP of Engineering at leading SaaS companies with 15+ years building scalable technology solutions.",
      expertise: "Technology Strategy, Product Development",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Google engineer with deep expertise in data systems, machine learning, and enterprise architecture.",
      expertise: "Data Engineering, AI/ML, System Architecture",
    },
    {
      name: "Jennifer Kim",
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

  return <div className="min-h-screen"></div>;
};

export default About;
