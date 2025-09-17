import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultFaqs = [
    {
      question: "How quickly can I see results from your services?",
      answer:
        "Most clients start seeing initial results within 2-4 weeks of implementation. However, significant improvements typically occur within 60-90 days as our systems learn and optimize based on your specific business patterns and goals.",
    },
    {
      question: "What makes your data solutions different from competitors?",
      answer:
        "Our data solutions combine real-time enrichment with AI-powered insights, providing not just accurate information but actionable intelligence. We focus on data quality, compliance, and seamless integration with your existing systems.",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes, we provide 24/7 technical support and dedicated account management. Our team monitors your systems continuously and provides regular optimization recommendations to ensure peak performance.",
    },
    {
      question: "Can your solutions integrate with our existing tech stack?",
      answer:
        "Absolutely. Our solutions are built with integration in mind. We work with popular CRM platforms, marketing automation tools, and can develop custom APIs for proprietary systems. Our technical team conducts a thorough compatibility assessment before implementation.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have deep expertise in technology, financial services, healthcare, retail & e-commerce, logistics, and HR & staffing. Our solutions are customizable to meet the specific regulatory and operational requirements of each industry.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We maintain enterprise-grade security protocols including SOC 2 Type II compliance, GDPR compliance, and regular security audits. All data is encrypted in transit and at rest, with strict access controls and monitoring in place.",
    },
    {
      question: "What's included in your automation services?",
      answer:
        "Our automation services include workflow design, email marketing automation, CRM integration, lead scoring, custom API development, and ongoing optimization. We create tailored automation sequences that align with your business processes.",
    },
    {
      question: "Do you offer custom development or only pre-built solutions?",
      answer:
        "We offer both. Our core solutions can be customized extensively, and we also provide full custom development services for unique requirements. Our technical team works closely with you to determine the best approach for your specific needs.",
    },
  ];

  const faqsToShow = faqs.length > 0 ? faqs : defaultFaqs;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return <div className="space-y-4"></div>;
};

export default FAQAccordion;
