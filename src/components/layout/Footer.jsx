import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "B2B Data Solutions", href: "/services#data" },
    { name: "Automation Services", href: "/services#automation" },
    { name: "Technology Solutions", href: "/services#technology" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
  ];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success | loading
  const [error, setError] = useState("");

  function validateEmail(e) {
    // simple email regex
    return /\S+@\S+\.\S+/.test(e);
  }

  async function handleSubscribe(e) {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      // Simulated network delay (replace with real API call)
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setError("Subscription failed — please try again later.");
    }
  }

  return (
    <footer
      className="bg-card text-card-foreground border-t border-border"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div
                aria-hidden
                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-card bg-gradient-brand"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="4"
                    fill="white"
                    opacity="0.06"
                  />
                  <path
                    d="M6 14L10.2 9.6L14 14"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="block font-extrabold text-lg text-primary">
                  AgencyPro
                </span>
                <small className="block text-sm text-muted-foreground">
                  Creative · Strategy · Tech
                </small>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Empowering businesses with smarter data, faster growth, and
              stronger technological foundations.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-card-foreground">
                <Mail className="w-4 h-4" /> <span>hello@agencypro.com</span>
              </div>
              <div className="flex items-center gap-2 text-card-foreground">
                <Phone className="w-4 h-4" /> <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-card-foreground">
                <MapPin className="w-4 h-4" /> <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-card-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-card-foreground hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Stay Connected
            </h3>
            <p className="text-sm mb-4 text-muted-foreground">
              Subscribe for monthly insights, case studies, and product updates.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 items-stretch"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                  setError("");
                }}
                placeholder="Your email address"
                aria-invalid={status === "error"}
                aria-describedby={
                  status === "error" ? "footer-email-error" : undefined
                }
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold text-sm bg-gradient-cta text-highlight-foreground shadow-lg"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {/* feedback */}
            <div className="mt-3 min-h-[1.25rem]">
              {status === "error" && (
                <p id="footer-email-error" className="text-sm text-destructive">
                  {error}
                </p>
              )}
              {status === "success" && (
                <p className="text-sm font-medium text-accent">
                  Thanks — you're on the list!
                </p>
              )}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-transparent transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AgencyPro. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-card-foreground hover:text-accent transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-card-foreground hover:text-accent transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
