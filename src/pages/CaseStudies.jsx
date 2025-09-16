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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real Businesses. <span className="text-accent">Real Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover how companies across industries have transformed their
            operations and achieved remarkable growth with our data-driven
            solutions.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {successMetrics.totalClients}
              </div>
              <div className="text-white/90 text-sm">Companies Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {successMetrics.avgROI}
              </div>
              <div className="text-white/90 text-sm">Average ROI Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {successMetrics.totalRevenue}
              </div>
              <div className="text-white/90 text-sm">
                Client Revenue Generated
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {successMetrics.satisfaction}
              </div>
              <div className="text-white/90 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={filterIndustry}
                onChange={(e) => setFilterIndustry(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              {filteredCaseStudies.length} results found
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No case studies found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories Highlight */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Our{" "}
              <span className="text-gradient">Approach Different</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our success comes from a proven methodology that combines deep
              industry expertise with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elegant p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Data-Driven Decisions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every recommendation is backed by comprehensive analysis and
                proven methodologies that deliver measurable results.
              </p>
            </div>

            <div className="card-elegant p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Filter className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Industry Specialization
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deep expertise in specific industries allows us to deliver
                solutions that address unique challenges and opportunities.
              </p>
            </div>

            <div className="card-elegant p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Continuous Optimization
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don't just implement and leave. Our ongoing optimization
                ensures sustained performance and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionBanner
        title="Ready to Write Your Success Story?"
        subtitle="Join hundreds of companies that have achieved remarkable growth with our proven solutions and methodology."
        primaryCta="Start Your Transformation"
        secondaryCta="Schedule Strategy Call"
      />
    </div>
  );
};

export default CaseStudies;
