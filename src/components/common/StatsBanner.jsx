import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatsBanner = ({ stats = [] }) => {
  const defaultStats = [
    { number: "500+", label: "Clients Served" },
    { number: "1M+", label: "Leads Generated" },
    { number: "150%", label: "Average ROI Increase" },
    { number: "24/7", label: "Customer Support" },
  ];

  const statsToShow = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      {/* Optional subtle grid background for premium feel */}
      <div className="absolute inset-0 bg-grid-white dark:bg-grid-black opacity-10" />

      <div className="relative container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsToShow.map((stat, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-20%" });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover-lift-sm"
              >
                <span className="text-4xl md:text-5xl font-extrabold text-accent drop-shadow-glow">
                  {stat.number}
                </span>
                <span className="text-white/90 text-lg md:text-xl font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
