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
      {/* Newsletter CTA */}
      <div className="footer-newsletter text-center sm:text-left">
        <div className="container-custom py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 max-w-lg"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Get Exclusive Insights
            </h3>
            <p className="text-white/85 text-base">
              Join our newsletter and stay ahead in B2B marketing, automation,
              and technology.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex w-full sm:w-auto flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="input-glow flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:ring-accent transition"
            />
            <Button className="btn-gradient-accent px-6 flex items-center gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md"
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
          <p className="text-muted-foreground leading-relaxed">
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
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="footer-link text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.href} className="footer-link text-sm">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-3 mb-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="footer-social w-10 h-10 rounded-lg flex items-center justify-center"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <Link to="/privacy" className="footer-link block">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link block">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-2">
          <p>© {currentYear} DigiConnex. All rights reserved.</p>
          <p>Design and Developed by www.sofnexus.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
