import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({
  title,
  company,
  industry,
  challenge,
  solution,
  results = [],
  link = "#",
  className = "",
}) => {
  const getIndustryIcon = (industry) => {
    switch (industry?.toLowerCase()) {
      case "technology":
        return Zap;
      case "financial services":
        return TrendingUp;
      default:
        return Target;
    }
  };

  const IndustryIcon = getIndustryIcon(industry);

  return (
    <div className={`card-elegant p-6 group cursor-pointer ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <IndustryIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {company}
            </h3>
            {industry && (
              <span className="text-sm text-muted-foreground">{industry}</span>
            )}
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {title}
      </h2>

      {/* Challenge */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-primary mb-2">Challenge</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {challenge}
        </p>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {solution}
        </p>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3">Results</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((result, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-3">
                <div className="text-lg font-bold text-accent mb-1">
                  {result.metric}
                </div>
                <div className="text-xs text-muted-foreground">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <Link
        to={link}
        className="inline-flex items-center space-x-2 text-primary font-medium group-hover:text-secondary transition-colors duration-300"
      >
        <span>Read Full Case Study</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default CaseStudyCard;
