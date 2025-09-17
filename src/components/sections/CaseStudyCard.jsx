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
      case "e-commerce":
        return ArrowRight;
      default:
        return Target;
    }
  };

  const IndustryIcon = getIndustryIcon(industry);

  return (
    <div
      className={`bg-card border border-border/50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${className}`}
    >
      {/* Industry + Icon */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
          <IndustryIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-medium text-primary dark:text-secondary">
          {industry}
        </span>
      </div>

      {/* Title & Company */}
      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{company}</p>

      {/* Challenge + Solution */}
      <div className="space-y-3 mb-4">
        {challenge && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            <span className="font-semibold text-foreground">Challenge: </span>
            {challenge}
          </p>
        )}
        {solution && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            <span className="font-semibold text-foreground">Solution: </span>
            {solution}
          </p>
        )}
      </div>

      {/* Results Highlights */}
      {results?.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {results.slice(0, 2).map((r, idx) => (
            <div
              key={idx}
              className="bg-muted rounded-lg p-3 text-center hover:bg-primary/5 transition-colors"
            >
              <p className="text-lg font-bold text-primary">{r.metric}</p>
              <p className="text-xs text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* CTA Link */}
      <Link
        to={link}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
      >
        <span>Read Full Case Study</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default CaseStudyCard;
