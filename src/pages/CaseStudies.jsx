import CaseStudyCard from "@/components/sections/CaseStudyCard";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import { Filter, Search, TrendingUp } from "lucide-react";
import { useState } from "react";

const CaseStudies = () => {
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const industries = [
    "All",
    "Technology",
    "Financial Services",
    "E-commerce",
    "Healthcare",
    "Manufacturing",
  ];

  const caseStudies = [
    {
      title: "340% Lead Generation Increase for SaaS Startup",
      company: "TechFlow Solutions",
      industry: "Technology",
      challenge:
        "A rapidly growing SaaS company struggled with manual lead qualification processes, resulting in poor conversion rates and overwhelmed sales teams. They needed to scale their lead generation while maintaining quality.",
      solution:
        "Implemented our comprehensive B2B data platform with automated lead scoring, real-time enrichment, and integrated CRM workflows. Added behavioral tracking and intent data analysis for better qualification.",
      results: [
        { metric: "340%", description: "Increase in qualified leads" },
        { metric: "85%", description: "Reduction in manual work" },
        { metric: "2.5x", description: "Faster sales cycles" },
        { metric: "$2.3M", description: "Additional revenue in 12 months" },
      ],
      link: "/case-studies/techflow-solutions",
    },
    {
      title: "Automated Compliance System Saves 200 Hours Monthly",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge:
        "Regional bank faced increasing regulatory requirements and manual compliance processes that consumed significant resources and created risk of human error in critical reporting.",
      solution:
        "Developed automated compliance monitoring system with real-time data validation, automated report generation, and integrated audit trails. Ensured full SOX and banking regulation compliance.",
      results: [
        { metric: "200hrs", description: "Monthly time savings" },
        { metric: "99.9%", description: "Compliance accuracy rate" },
        { metric: "60%", description: "Faster audit preparation" },
        { metric: "$450K", description: "Annual cost reduction" },
      ],
      link: "/case-studies/securebank-financial",
    },
    {
      title: "E-commerce Platform Doubles Conversion Rate",
      company: "StyleHub Retail",
      industry: "E-commerce",
      challenge:
        "Online fashion retailer struggled with low conversion rates, high cart abandonment, and difficulty personalizing customer experiences across multiple touchpoints and product categories.",
      solution:
        "Implemented AI-powered personalization engine with behavioral tracking, automated email sequences, dynamic product recommendations, and abandoned cart recovery workflows.",
      results: [
        { metric: "125%", description: "Conversion rate increase" },
        { metric: "45%", description: "Reduction in cart abandonment" },
        { metric: "180%", description: "Email engagement lift" },
        { metric: "$1.8M", description: "Additional revenue in 6 months" },
      ],
      link: "/case-studies/stylehub-retail",
    },
    {
      title: "Healthcare Provider Improves Patient Engagement by 75%",
      company: "WellCare Medical Group",
      industry: "Healthcare",
      challenge:
        "Multi-location healthcare provider had fragmented patient communication, manual appointment scheduling, and no systematic way to track patient satisfaction or outcomes.",
      solution:
        "Built HIPAA-compliant patient engagement platform with automated appointment reminders, follow-up sequences, satisfaction surveys, and integrated telehealth capabilities.",
      results: [
        { metric: "75%", description: "Patient engagement increase" },
        { metric: "40%", description: "Reduction in no-shows" },
        { metric: "90%", description: "Patient satisfaction score" },
        { metric: "30%", description: "Administrative time savings" },
      ],
      link: "/case-studies/wellcare-medical",
    },
    {
      title: "Manufacturing Efficiency Gains Through Predictive Analytics",
      company: "PrecisionTech Manufacturing",
      industry: "Manufacturing",
      challenge:
        "Industrial manufacturer experienced frequent equipment downtime, unpredictable maintenance costs, and difficulty optimizing production schedules across multiple facilities.",
      solution:
        "Deployed IoT sensors and predictive analytics platform with real-time monitoring, predictive maintenance scheduling, and production optimization algorithms.",
      results: [
        { metric: "65%", description: "Reduction in downtime" },
        { metric: "40%", description: "Maintenance cost savings" },
        { metric: "25%", description: "Production efficiency gain" },
        { metric: "$1.2M", description: "Annual operational savings" },
      ],
      link: "/case-studies/precisiontech-manufacturing",
    },
    {
      title: "Global Logistics Company Optimizes Supply Chain Visibility",
      company: "GlobalMove Logistics",
      industry: "Logistics",
      challenge:
        "International logistics company lacked real-time visibility across their supply chain, leading to delayed shipments, poor customer communication, and inefficient resource allocation.",
      solution:
        "Created comprehensive supply chain visibility platform with real-time tracking, automated customer notifications, predictive delivery estimates, and optimization algorithms.",
      results: [
        { metric: "95%", description: "On-time delivery rate" },
        { metric: "50%", description: "Customer inquiry reduction" },
        { metric: "30%", description: "Route optimization savings" },
        { metric: "4.8/5", description: "Customer satisfaction score" },
      ],
      link: "/case-studies/globalmove-logistics",
    },
  ];

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesIndustry =
      filterIndustry === "All" || study.industry === filterIndustry;
    const matchesSearch =
      searchTerm === "" ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const successMetrics = {
    totalClients: "500+",
    avgROI: "165%",
    totalRevenue: "$50M+",
    satisfaction: "98%",
  };

  return <div className="min-h-screen"></div>;
};

export default CaseStudies;
