import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  link = "#",
  className = "",
}) => {
  return (
    <div
      className={`bg-card border border-border rounded-xl p-8 group hover-lift transition-all duration-300 hover:border-primary/20 hover:shadow-xl ${className}`}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="pt-4">
          <Button
            asChild
            variant="ghost"
            className="group/btn p-0 h-auto text-primary hover:text-primary font-semibold"
          >
            <Link to={link} className="flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
