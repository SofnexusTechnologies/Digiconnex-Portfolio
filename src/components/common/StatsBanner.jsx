const StatsBanner = ({ stats = [] }) => {
  const defaultStats = [
    { number: "500+", label: "Clients Served", suffix: "" },
    { number: "1M+", label: "Leads Generated", suffix: "" },
    { number: "150%", label: "Average ROI Increase", suffix: "" },
    { number: "24/7", label: "Customer Support", suffix: "" },
  ];

  const statsToShow = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16"></section>
  );
};

export default StatsBanner;
