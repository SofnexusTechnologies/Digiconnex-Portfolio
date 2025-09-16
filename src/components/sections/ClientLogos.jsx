const ClientLogos = ({ title = "Trusted by Industry Leaders" }) => {
  // Placeholder company names - in a real app, these would be actual logo images
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
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that trust us to power
            their growth and success.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 group cursor-pointer"
            >
              {/* Placeholder Logo */}
              <div className="w-24 h-12 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rotating Animation Effect */}
        <div className="mt-12 overflow-hidden">
          <div className="flex space-x-8 animate-pulse">
            <div className="flex space-x-8 opacity-60">
              {clients.concat(clients).map((client, index) => (
                <div
                  key={`scroll-${index}`}
                  className="flex-shrink-0 w-20 h-10 bg-gradient-to-r from-muted-foreground/10 to-muted-foreground/5 rounded flex items-center justify-center"
                >
                  <span className="text-xs text-muted-foreground/60">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
