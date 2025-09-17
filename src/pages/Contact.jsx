import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@digiconnex.com",
      description: "Get in touch via email",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      description: "We're here to help",
    },
  ];

  const services = [
    "B2B Data Solutions",
    "Automation Services",
    "Technology Solutions",
    "Consultation & Strategy",
    "Custom Development",
    "Other",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We've received your message and will get back to you within 24
            hours.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-cta">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Let's Build Something{" "}
              <span className="text-gradient-primary">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to transform your business? Our team of experts is here to
              help you unlock your full potential with data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="card-elegant p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="5"
                      placeholder="Tell us about your project and goals..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-cta flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why Choose DigiConnex?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Free initial consultation and strategy session",
                      "Custom solutions tailored to your business needs",
                      "Proven track record with 500+ successful projects",
                      "24/7 support and dedicated account management",
                      "Transparent pricing with no hidden fees",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-elegant p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    Ready to get started?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Schedule a free 30-minute consultation to discuss your
                    project and see how we can help.
                  </p>
                  <button className="btn-secondary flex items-center space-x-2">
                    <span>Schedule Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
