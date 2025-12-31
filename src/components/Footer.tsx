import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Instagram, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <>
      <style>{`
        @keyframes shineEffect {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .shine-wrapper {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .shine-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
        }

        .shine-link:hover .shine-overlay {
          animation: shineEffect 1.2s linear;
        }

        .globe-icon {
          transition: transform 0.3s ease;
        }

        .shine-link:hover .globe-icon {
          transform: rotate(20deg);
        }
      `}</style>

      <footer className="bg-card border-t border-border">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-3xl font-heading font-bold flame-text">
                FLAME GAME
              </h3>
              <p className="text-muted-foreground">
                Experience the finest Pakistani cuisine with authentic flavors and sizzling kebabs in the heart of Gujranwala.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com/FlameGame.com.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:contact@flamegame.pk"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Menu', 'Reservations', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Plot 75, Ar-Rehman Business Complex, Civil Lines, Gujranwala, Punjab
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+92553256111" className="text-muted-foreground hover:text-primary transition-colors">
                    +92 55 3256111
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-muted-foreground">
                    <p>Mon-Thu, Sat-Sun: 12 PM - 12 AM</p>
                    <p>Friday: 3 PM - 12 AM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold uppercase tracking-wider">
                Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Dine-in', 'Takeout', 'Delivery', 'Halal', 'All You Can Eat', 'Free Parking', 'Kids Friendly'].map(
                  (feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Flame Game Restaurant. All rights reserved.
            </p>
            <a
              href="https://alihaiderportfoli.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-link flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe size={18} className="globe-icon" />
              <span className="shine-wrapper text-sm">
                Design & Development by Ali Haider
                <span className="shine-overlay"></span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}