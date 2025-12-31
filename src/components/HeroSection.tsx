import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-flame-red/20 rounded-full blur-[100px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border animate-fade-up">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium">4.0★ Rated by 666+ Happy Customers</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="flame-text">FLAME GAME</span>
            <br />
            <span className="text-foreground">RESTAURANT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Experience the finest Pakistani cuisine with authentic flavors, sizzling kebabs, and aromatic biryani in Gujranwala
          </p>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 backdrop-blur-sm rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">12 PM - 12 AM</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 backdrop-blur-sm rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Gujranwala, Punjab</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/menu">
              <Button variant="hero" size="xl" className="gap-2 font-heading">
                View Menu
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/reservations">
              <Button variant="outline" size="xl" className="gap-2 font-heading">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
