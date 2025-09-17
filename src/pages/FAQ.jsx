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
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) =>
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What types of businesses do you work with?",
          answer:
            "We work with businesses across technology, finance, healthcare, retail, manufacturing, and logistics — from startups to enterprises. Our solutions are built to scale with your growth.",
        },
        {
          question: "How quickly can I expect to see results?",
          answer:
            "Initial results are often visible within 2-4 weeks. Most clients see measurable impact within 60-90 days as systems optimize based on your data and workflows.",
        },
        {
          question: "Do you offer custom solutions or pre-built packages?",
          answer:
            "Both. We provide proven, ready-to-deploy solutions as well as fully custom development for unique requirements. Many clients prefer a hybrid approach for speed + tailored functionality.",
        },
      ],
    },
    {
      category: "Implementation & Technical",
      questions: [
        {
          question: "How do you ensure smooth integration with our systems?",
          answer:
            "We conduct a full system audit, use industry-standard APIs, and roll out in phases to avoid disruption. Each integration is tested extensively before going live.",
        },
        {
          question: "What level of technical expertise does our team need?",
          answer:
            "Minimal. We handle implementation, configuration, and training. Your team just needs to focus on adoption and business goals — we manage the complexity.",
        },
        {
          question: "How do you handle data migration?",
          answer:
            "Our process includes auditing, cleansing, staged migration, validation, and backups to ensure zero data loss and full continuity of operations.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you ensure data security and privacy?",
          answer:
            "We are SOC 2 Type II, GDPR, and HIPAA compliant. All data is encrypted in transit and at rest, with role-based access control and continuous monitoring.",
        },
        {
          question: "Are your solutions compliant with regulations?",
          answer:
            "Yes — we design with compliance-first architecture for finance, healthcare, and other regulated industries, including full audit trails.",
        },
        {
          question: "Who has access to our data?",
          answer:
            "Access is strictly controlled and logged. You maintain full ownership and can request export or deletion at any time.",
        },
      ],
    },
  ];

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
      <section className="section-padding bg-gradient-to-br from-[#1A3258]/10 via-[#34A89E]/10 to-[#F2C94C]/10 dark:from-[#1A3258]/40 dark:via-[#34A89E]/20 dark:to-[#F2C94C]/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get{" "}
              <span className="bg-gradient-to-r from-[#1A3258] via-[#34A89E] to-[#F2C94C] bg-clip-text text-transparent">
                Answers
              </span>{" "}
              to Your Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to know about our services, process, and
              support — all in one place.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-[#34A89E] focus:ring-2 focus:ring-[#34A89E]/30 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto space-y-8">
          {searchTerm ? (
            <motion.div layout className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Search Results ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <p className="text-sm text-[#34A89E] font-medium mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-10">
                  <HelpCircle className="w-14 h-14 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-bold">No results found</p>
                  <p className="text-muted-foreground">
                    Try different keywords or browse by category.
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl shadow-card p-6"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((q, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    const isOpen = openItems[key];
                    return (
                      <div
                        key={key}
                        className="border border-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-muted/40 transition-colors"
                        >
                          <span className="font-semibold">{q.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-muted-foreground">
                                {q.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Support Options */}
      <section className="section-padding bg-muted/30 dark:bg-[#1A3258]/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-foreground">
              Still have questions?
            </h2>
            <p className="text-muted-foreground">
              Our team is here to help you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A3258] to-[#34A89E] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    {option.description}
                  </p>
                  <p className="text-sm text-[#34A89E] mb-4">
                    {option.available}
                  </p>
                  <button className="btn-secondary w-full">
                    {option.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="container-custom">
        <CallToActionBanner
          title="Need Personalized Help?"
          subtitle="Schedule a consultation with our experts and get answers tailored to your business."
          primaryCta="Talk to an Expert"
          secondaryCta="Browse Documentation"
          theme="gradient"
        />
      </div>
    </div>
  );
};

export default FAQ;
