import { motion } from "framer-motion";

const StatsBanner = ({ stats = [] }) => {
  const defaultStats = [
    { number: "500+", label: "Clients Served" },
    { number: "1M+", label: "Leads Generated" },
    { number: "150%", label: "Average ROI Increase" },
    { number: "24/7", label: "Customer Support" },
  ];

  const statsToShow = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="gradient-primary text-white py-16">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsToShow.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-accent">
              {stat.number}
            </span>
            <span className="text-white/90 text-lg md:text-xl font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
