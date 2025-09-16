import { Users, Target, Zap, Award, TrendingUp, Shield } from "lucide-react";
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-accent">AgencyPro</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're a team of data scientists, engineers, and business strategists
            who believe that every company deserves access to enterprise-grade
            technology solutions that drive real growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-white">Companies Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">165%</div>
              <div className="text-white">Average ROI Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-white">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
            </div>

            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2019, AgencyPro emerged from a simple but powerful
                observation: while large enterprises had access to sophisticated
                data intelligence and automation tools, growing businesses were
                left behind with fragmented, complex, and expensive solutions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our founding team, veterans from companies like Google,
                Salesforce, and HubSpot, set out to democratize access to
                enterprise-grade technology. We believed that every business,
                regardless of size, should have the tools needed to compete in
                an increasingly data-driven world.
              </p>

              <p className="text-lg leading-relaxed">
                Today, we've helped over 500 companies transform their
                operations, with clients consistently achieving 150%+ ROI
                increases. Our success comes from combining deep technical
                expertise with an unwavering focus on business outcomes and
                client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-elegant p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower growing businesses with enterprise-grade data
                intelligence, automation, and technology solutions that drive
                measurable growth and competitive advantage.
              </p>
            </div>

            <div className="card-elegant p-8 text-center">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every business has access to the technology and
                insights needed to reach their full potential, regardless of
                size or resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every
              solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful
              implementations and measurable results.
            </p>
          </div>

          <div className="space-y-8">
            {approach.map((phase, index) => (
              <div key={index} className="card-elegant p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {phase.step}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div className="lg:col-span-1">
                    <ul className="space-y-2">
                      {phase.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our growth and evolution as a leading technology
              solutions provider.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 card-elegant p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leadership <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders from top technology companies, united by a
              passion for helping businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card-elegant p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {leader.name}
                </h3>
                <p className="text-accent font-medium mb-4">{leader.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {leader.bio}
                </p>
                <div className="text-xs text-primary font-medium">
                  {leader.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionBanner
        title="Ready to Partner with Us?"
        subtitle="Join hundreds of companies that have transformed their operations and accelerated growth with our solutions."
        primaryCta="Start Your Journey"
        secondaryCta="Meet Our Team"
      />
    </div>
  );
};

export default About;
