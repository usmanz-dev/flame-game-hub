import { Utensils, Truck, Clock, Car, Baby, Accessibility } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const features = [
  { icon: Utensils, title: 'Dine-In', description: 'Enjoy our cozy atmosphere' },
  { icon: Truck, title: 'Delivery', description: 'Fast delivery to your door' },
  { icon: Clock, title: 'All You Can Eat', description: 'Unlimited buffet options' },
  { icon: Car, title: 'Free Parking', description: 'Ample parking space' },
  { icon: Baby, title: 'Kid Friendly', description: 'Special kids menu' },
  { icon: Accessibility, title: 'Accessible', description: 'Wheelchair accessible' },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={restaurantInterior}
                alt="Flame Game Restaurant Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-background p-6 rounded-2xl border border-border shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-primary">4.0</span>
                </div>
                <div>
                  <div className="flex text-primary">
                    {'★★★★☆'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">666+ Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
                A <span className="flame-text">Dining</span> Experience Like No Other
              </h2>
              <p className="text-muted-foreground text-lg">
                At Flame Game, we combine authentic Pakistani flavors with exceptional service to create unforgettable dining experiences.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-4 bg-muted rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
