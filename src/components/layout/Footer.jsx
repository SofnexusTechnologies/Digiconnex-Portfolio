import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
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

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-12">
      {/* Newsletter Section */}
      <div className="gradient-hero text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-md">
            <h3 className="text-3xl font-extrabold text-white">
              Get Exclusive Insights
            </h3>
            <p className="text-white/90 text-sm">
              Join our newsletter and stay ahead in B2B marketing, automation,
              and technology.
            </p>
          </div>

          <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-md">
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md"
            >
              <span className="text-white font-bold text-lg">D</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-primary">
                DigiConnex
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Marketing Agency
              </span>
            </div>
          </Link>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Transforming businesses with data-driven strategies, intelligent
            automation, and modern tech solutions for scalable growth.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              hello@digiconnex.com
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent" />
              San Francisco, CA
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  to={service.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-3 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors shadow-sm"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-foreground group-hover:text-accent-foreground" />
                </motion.a>
              );
            })}
          </div>
          <div className="space-y-2 text-sm">
            <Link
              to="/privacy"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DigiConnex. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Made with ❤️ & innovation for growing businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
