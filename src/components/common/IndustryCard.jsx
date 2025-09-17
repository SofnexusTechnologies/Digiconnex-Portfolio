import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IndustryCard = ({
  icon: Icon,
  title,
  description,
  services = [],
  link = "#",
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Decorative Gradient Border (premium look) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative p-6 flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md mb-4">
          <Icon className="text-white w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Services Preview */}
        {services.length > 0 && (
          <ul className="space-y-2 mb-6">
            {services.slice(0, 3).map((service, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 flex-shrink-0"></span>
                {service}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <div className="mt-auto">
          <Link
            to={link}
            className="inline-flex items-center space-x-2 font-medium text-primary group-hover:text-accent transition-colors"
          >
            <span>Explore Industry</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
