import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  link = "#",
  className = "",
}) => {
  return (
    <div className={`card-elegant p-8 group cursor-pointer ${className}`}>
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-sm text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link */}
      <Link
        to={link}
        className="inline-flex items-center space-x-2 text-primary font-medium group-hover:text-secondary transition-colors duration-300"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
