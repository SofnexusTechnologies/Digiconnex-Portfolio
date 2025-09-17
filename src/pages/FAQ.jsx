"use client";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import {
  HelpCircle,
  MessageCircle,
  Search,
  Phone,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What types of businesses do you work with?",
          answer:
            "We work with growing businesses across various industries including technology, financial services, healthcare, e-commerce, manufacturing, and logistics. Our solutions are designed to scale from startups to enterprise-level organizations. Whether you're a SaaS company looking to accelerate growth, a financial services firm needing compliance-ready solutions, or a manufacturer seeking operational efficiency, we have industry-specific expertise to help you succeed.",
        },
        {
          question: "How quickly can I expect to see results?",
          answer:
            "Most clients start seeing initial improvements within 2-4 weeks of implementation. Significant results typically occur within 60-90 days as our systems learn and optimize based on your specific business patterns. For example, lead generation improvements often show within the first month, while comprehensive automation benefits compound over 3-6 months. We provide regular progress reports and adjust strategies based on performance data.",
        },
        {
          question: "Do you offer custom solutions or only pre-built packages?",
          answer:
            "We offer both approaches. Our core solutions can be extensively customized to meet your specific needs, and we also provide full custom development services for unique requirements. During our initial consultation, we assess whether your needs can be met with our proven solutions (faster implementation) or require custom development (tailored functionality). Most clients benefit from a hybrid approach combining proven components with custom elements.",
        },
      ],
    },
    {
      category: "Implementation & Technical",
      questions: [
        {
          question:
            "How do you ensure smooth integration with our existing systems?",
          answer:
            "Our technical team conducts a comprehensive system audit before implementation to identify all integration points and potential challenges. We use industry-standard APIs and have pre-built connectors for popular platforms like Salesforce, HubSpot, Microsoft 365, and many others. For custom integrations, we develop secure, scalable APIs. Our phased approach ensures minimal disruption to your current operations while testing each component thoroughly before go-live.",
        },
        {
          question: "What level of technical expertise does our team need?",
          answer:
            "Minimal technical expertise is required from your team. We handle all technical implementation, configuration, and maintenance. We provide comprehensive training for your team on using the new systems and workflows. Our user interfaces are designed to be intuitive, and we offer ongoing support to ensure your team feels confident using the tools. Most clients are fully operational within 1-2 weeks of training completion.",
        },
        {
          question:
            "How do you handle data migration from our current systems?",
          answer:
            "We follow a secure, tested data migration process that includes: 1) Data audit and cleansing, 2) Migration strategy development, 3) Test migrations with sample data, 4) Full migration during planned downtime, and 5) Validation and verification. We ensure zero data loss and maintain full backups throughout the process. Historical data integrity is preserved, and we can migrate incrementally if needed to minimize business disruption.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you ensure data security and privacy?",
          answer:
            "We maintain enterprise-grade security protocols including SOC 2 Type II compliance, GDPR compliance, and industry-specific requirements like HIPAA for healthcare clients. All data is encrypted in transit and at rest using AES-256 encryption. We implement strict access controls, regular security audits, and continuous monitoring. Our infrastructure is hosted on secure cloud platforms with 99.9% uptime guarantees and automatic backups.",
        },
        {
          question: "Are your solutions compliant with industry regulations?",
          answer:
            "Yes, our solutions are built with compliance in mind for various industries. We maintain certifications for SOC 2, GDPR, HIPAA, and other relevant standards. For financial services, we ensure SOX compliance and banking regulations adherence. Healthcare solutions meet HIPAA requirements, and we can customize compliance features for specific industry needs. We also provide audit trails and documentation required for regulatory reporting.",
        },
        {
          question: "Who has access to our business data?",
          answer:
            "Access to your data is strictly controlled and limited to essential personnel only. Our team members undergo background checks and sign comprehensive NDAs. Data access is logged and monitored, with role-based permissions ensuring individuals only access data necessary for their function. You maintain full ownership of your data and can request its removal at any time. We provide detailed access logs and can customize data governance policies to meet your requirements.",
        },
      ],
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "What does your pricing structure look like?",
          answer:
            "Our pricing is tailored to your specific needs and business size. We offer both project-based pricing for implementations and subscription-based pricing for ongoing services. Factors include the complexity of your requirements, number of users, data volume, and level of customization needed. We provide transparent, fixed-price quotes with no hidden fees. Most clients see positive ROI within 6 months, making our solutions a profitable investment.",
        },
        {
          question: "What kind of ongoing support do you provide?",
          answer:
            "We provide comprehensive ongoing support including: 24/7 technical support for critical issues, dedicated account management, regular system optimization, performance monitoring, feature updates, and user training. Our support team includes both technical specialists and business strategists who understand your industry. We also provide quarterly business reviews to ensure you're maximizing value from your investment.",
        },
        {
          question: "Can we scale our solution as our business grows?",
          answer:
            "Absolutely. Our solutions are designed with scalability in mind. Whether you're adding more users, processing higher data volumes, or expanding to new markets, our infrastructure can grow with you. We regularly review your usage patterns and proactively recommend optimizations or upgrades. Scaling is typically seamless with no disruption to your operations, and pricing adjusts proportionally to your usage.",
        },
      ],
    },
  ];

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((q) => ({ ...q, category: category.category }))
  );

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers from our support team",
      action: "Start Chat",
      available: "24/7 Available",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "Business Hours",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Browse our comprehensive documentation",
      action: "Visit Help Center",
      available: "Always Available",
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
              <span>Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Get <span className="text-gradient-primary">Answers</span> to Your
              Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Find answers to common questions about our services,
              implementation process, and how we can help transform your
              business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {searchTerm ? (
              /* Search Results */
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Search Results ({filteredQuestions.length})
                </h2>
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item, index) => (
                    <div key={index} className="card-elegant p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-sm text-primary font-medium mb-2">
                            {item.category}
                          </div>
                          <h3 className="text-lg font-bold text-foreground mb-3">
                            {item.question}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      No results found
                    </h3>
                    <p className="text-muted-foreground">
                      Try searching with different keywords or browse our
                      categories below.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* FAQ Categories */
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="card-elegant p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((item, itemIndex) => {
                        const globalIndex = `${categoryIndex}-${itemIndex}`;
                        const isOpen = openItems[globalIndex];
                        return (
                          <div
                            key={itemIndex}
                            className="border border-border rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                            >
                              <span className="font-semibold text-foreground pr-4">
                                {item.question}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4">
                                <p className="text-muted-foreground leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our support team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="card-elegant p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <div className="text-sm text-secondary font-medium mb-4">
                    {option.available}
                  </div>
                  <button className="btn-secondary w-full">
                    {option.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CallToActionBanner />
    </div>
  );
};

export default FAQ;
