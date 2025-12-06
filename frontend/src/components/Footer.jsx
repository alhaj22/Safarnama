import React from 'react';
import { MapPin, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="logo-text">SAFARNAMA</span>
            </div>
            <p className="footer-desc">
              Your trusted partner for unforgettable travel experiences around the world. 
              We create memories that last a lifetime.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+91 9978948010</span>
            </div>
            <div className="contact-item">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>info@Safarnama.com</span>
            </div>
            <div className="contact-item">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>123 Travel Street, Adventure City, India</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <p>© {new Date().getFullYear()} TravelWorld. All rights reserved.</p>
          <div className="bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
