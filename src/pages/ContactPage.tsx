import { Phone, MapPin, Clock, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-custom text-center">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Contact <span className="flame-text">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
            </p>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+92553256111"
                    className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+92 55 3256111</p>
                      <p className="text-sm text-primary mt-1">Click to call</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/92553256111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">WhatsApp</h3>
                      <p className="text-muted-foreground">Chat with us directly</p>
                      <p className="text-sm text-primary mt-1">Open WhatsApp</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Address</h3>
                      <p className="text-muted-foreground">
                        Plot 75, Ar-Rehman Business Complex,<br />
                        Civil Lines, Gujranwala, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Opening Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 12 PM - 12 AM</p>
                        <p>Friday: 3 PM - 12 AM</p>
                        <p>Saturday - Sunday: 12 PM - 12 AM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://web.facebook.com/FlameGame.com.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      <Facebook className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      <Instagram className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="mailto:contact@flamegame.pk"
                      className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      <Mail className="w-6 h-6 text-primary" />
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-heading font-semibold text-lg mb-2">Need immediate help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact us via WhatsApp for quick responses and reservations.
                  </p>
                  <a
                    href="https://wa.me/92553256111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="flame" className="gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0936945068!2d74.1826!3d32.1587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2a5a4a4a4a4a%3A0x4a4a4a4a4a4a4a4a!2sAr-Rehman%20Business%20Complex%2C%20Gujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Flame Game Restaurant Location"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir//Ar-Rehman+Business+Complex,+Gujranwala,+Punjab,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
