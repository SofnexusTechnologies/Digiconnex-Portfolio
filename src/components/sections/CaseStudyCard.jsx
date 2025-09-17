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
    </div>
  );
};

export default CaseStudyCard;
