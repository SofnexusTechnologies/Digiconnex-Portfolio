const StatsBanner = ({ stats = [] }) => {
  const defaultStats = [
    { number: "500+", label: "Clients Served", suffix: "" },
    { number: "1M+", label: "Leads Generated", suffix: "" },
    { number: "150%", label: "Average ROI Increase", suffix: "" },
    { number: "24/7", label: "Customer Support", suffix: "" },
  ];

  const statsToShow = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our data-driven approach has helped hundreds of businesses achieve
            remarkable growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsToShow.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium text-lg">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-white/70 text-sm mt-2">
                    {stat.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
