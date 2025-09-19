import { motion } from "framer-motion";

const ClientLogos = ({ title = "Trusted by Industry Leaders" }) => {
  const clients = [
    "TechCorp",
    "DataFlow",
    "InnovateLab",
    "GrowthMax",
    "ScaleUp",
    "BusinessPro",
    "DataSync",
    "AutoFlow",
  ];

  return (
    <section className="relative overflow-hidden py-16">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 gradient-primary opacity-[0.04] dark:opacity-[0.08]" />
      {/* Subtle grid for depth */}
      <div className="absolute inset-0 bg-grid-black dark:bg-grid-white opacity-[0.04]" />

      <div className="relative container-custom text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gradient-primary text-3xl md:text-4xl font-extrabold mb-12"
        >
          {title}
        </motion.h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="logo-card w-36 h-20 flex items-center justify-center rounded-xl border border-border bg-card/80 backdrop-blur-md hover:border-accent hover:shadow-accent transition-all"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
