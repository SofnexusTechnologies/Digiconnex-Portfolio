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
    <section className="py-16 bg-muted/50 dark:bg-muted/20">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-10 text-foreground"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="w-32 h-20 flex items-center justify-center bg-card border border-border rounded-xl shadow-sm hover-lift transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for logos - replace with actual images later */}
              <span className="text-lg font-semibold text-muted-foreground">
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
