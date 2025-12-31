import { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Send to WhatsApp
    const message = encodeURIComponent(
      `🔥 *New Reservation Request*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📅 Date: ${formData.date}\n` +
      `🕐 Time: ${formData.time}\n` +
      `👥 Guests: ${formData.guests}\n` +
      `💬 Message: ${formData.message || 'No special requests'}`
    );

    window.open(`https://wa.me/92553256111?text=${message}`, '_blank');

    toast.success('Reservation request sent! We will confirm shortly.');
    setFormData({ name: '', phone: '', date: '', time: '', guests: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${restaurantInterior})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />

      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Reserve Your Spot
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
                Book Your <span className="flame-text">Table</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Make a reservation and experience the warmth of Flame Game. Perfect for family dinners, celebrations, or a casual meal with friends.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Clock, label: 'Quick Response', desc: 'Within 30 minutes' },
                { icon: Users, label: 'Large Groups', desc: 'Up to 50 guests' },
              ].map((feature) => (
                <div key={feature.label} className="p-4 bg-card rounded-xl border border-border">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold">{feature.label}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">For immediate assistance, call us:</p>
              <a
                href="tel:+92553256111"
                className="text-2xl font-heading font-bold text-primary hover:underline"
              >
                +92 55 3256111
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <Input
                    placeholder="+92 XXX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Time
                  </label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Guests
                  </label>
                  <Input
                    type="number"
                    placeholder="4"
                    min="1"
                    max="50"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Special Requests
                </label>
                <Textarea
                  placeholder="Any special requests or dietary requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                variant="flame"
                size="lg"
                className="w-full font-heading"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Reserve via WhatsApp'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
