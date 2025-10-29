import { MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 lg:py-16 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo className="h-12 lg:h-14 w-auto" />
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm lg:text-base">
              Traditional hospitality meets modern comfort in the heart of the Himalayas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg mb-3 lg:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-gold transition-colors text-sm lg:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base lg:text-lg mb-3 lg:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-start gap-2 text-secondary-foreground/70 text-sm lg:text-base">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Village Chunjar, Rohru, Shimla</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/70 text-sm lg:text-base">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/70 text-sm lg:text-base">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@thekayile.com" className="hover:text-gold transition-colors">
                  info@thekayile.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 lg:pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/70 text-xs lg:text-sm">
          <p>© 2024 The Kayile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}