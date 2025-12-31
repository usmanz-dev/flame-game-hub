import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
];

const ReservationsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const message = encodeURIComponent(
      `🔥 *Reservation Request - Flame Game*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📧 Email: ${formData.email || 'Not provided'}\n` +
      `📅 Date: ${formData.date}\n` +
      `🕐 Time: ${formData.time}\n` +
      `👥 Guests: ${formData.guests}\n` +
      `🎉 Occasion: ${formData.occasion || 'Regular dining'}\n` +
      `💬 Special Requests: ${formData.message || 'None'}`
    );

    window.open(`https://wa.me/92553256111?text=${message}`, '_blank');

    toast.success('Reservation request sent successfully!');
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 section-padding">
          <div className="container-custom max-w-2xl text-center">
            <div className="bg-card p-12 rounded-2xl border border-border">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-4">
                Reservation <span className="flame-text">Confirmed</span>!
              </h1>
              <p className="text-muted-foreground mb-8">
                Your reservation request has been sent via WhatsApp. Our team will confirm your booking shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: '', occasion: '', message: '' });
                }}
              >
                Make Another Reservation
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-custom text-center">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Reserve Your Experience
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Book a <span className="flame-text">Table</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reserve your spot for an unforgettable dining experience. Perfect for celebrations, family dinners, or a casual meal.
            </p>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input
                        placeholder="+92 XXX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-medium">Email (Optional)</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Reservation Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date *</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time *</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                        className="w-full h-11 px-4 bg-muted border border-border rounded-lg text-foreground"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Number of Guests *</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        required
                        className="w-full h-11 px-4 bg-muted border border-border rounded-lg text-foreground"
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+', '20+', '30+', '50+'].map((n) => (
                          <option key={n} value={n}>{n} {typeof n === 'number' && n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Additional Information
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Occasion (Optional)</label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full h-11 px-4 bg-muted border border-border rounded-lg text-foreground"
                      >
                        <option value="">Select occasion</option>
                        <option value="Birthday">Birthday Celebration</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Business">Business Meeting</option>
                        <option value="Family Gathering">Family Gathering</option>
                        <option value="Date Night">Date Night</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Special Requests</label>
                      <Textarea
                        placeholder="Any dietary requirements, seating preferences, or special arrangements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-muted border-border min-h-[120px]"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="flame"
                  size="xl"
                  className="w-full font-heading"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Reserve via WhatsApp'}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting, you'll be redirected to WhatsApp to confirm your reservation.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReservationsPage;
