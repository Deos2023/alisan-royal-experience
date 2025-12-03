import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Alisan Royal Banquet Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating unforgettable celebrations with elegance and grandeur since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Jagannathpur, Barasat-Barrackpore Road, Opposite Adamas University, Kolkata – 700126
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a
                  href="tel:9062332969"
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  +91 9062332969
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a
                  href="mailto:info@alisanroyal.com"
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  info@alisanroyal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Alisan Royal Banquet. All rights reserved. Developed & Maintained By <span className="text-accent">Digital Exposure Online Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
