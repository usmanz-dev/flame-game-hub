import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Clock, Gift, Percent, Users, Utensils, Flame, Calendar, ArrowRight, Tag } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import biryaniImg from '@/assets/biryani.jpg';
import kebabsImg from '@/assets/kebabs.jpg';
import burgerImg from '@/assets/burger.jpg';

const offers = [
  {
    id: 1,
    title: 'Family Feast Deal',
    description: 'Complete family meal package with biryani, kebabs, naan, and drinks for 4-6 people.',
    originalPrice: 'Rs 3,500',
    offerPrice: 'Rs 2,499',
    discount: '30% OFF',
    image: biryaniImg,
    validity: 'Valid till Dec 31, 2024',
    terms: ['Minimum 4 persons', 'Dine-in only', 'Cannot combine with other offers'],
    category: 'family',
    popular: true,
  },
  {
    id: 2,
    title: 'BBQ Night Special',
    description: 'Unlimited BBQ platter with assorted kebabs, tikka, and grilled items.',
    originalPrice: 'Rs 1,200',
    offerPrice: 'Rs 899',
    discount: '25% OFF',
    image: kebabsImg,
    validity: 'Every Weekend',
    terms: ['Per person', 'Friday & Saturday only', '2 hour limit'],
    category: 'weekend',
    popular: false,
  },
  {
    id: 3,
    title: 'Burger Bonanza',
    description: 'Buy 2 flame burgers and get 1 absolutely free!',
    originalPrice: 'Rs 1,200',
    offerPrice: 'Rs 800',
    discount: 'Buy 2 Get 1',
    image: burgerImg,
    validity: 'Daily Offer',
    terms: ['Valid on all burgers', 'Dine-in & takeaway', 'Free burger of equal or lesser value'],
    category: 'daily',
    popular: true,
  },
  {
    id: 4,
    title: 'Student Discount',
    description: 'Show your student ID and get 15% off on your entire order.',
    originalPrice: '',
    offerPrice: '15% OFF',
    discount: '15% OFF',
    image: heroBg,
    validity: 'Always Active',
    terms: ['Valid student ID required', 'All menu items', 'Cannot combine with other offers'],
    category: 'student',
    popular: false,
  },
  {
    id: 5,
    title: 'Lunch Special',
    description: 'Get a complete lunch combo with rice, curry, salad, and drink at special price.',
    originalPrice: 'Rs 650',
    offerPrice: 'Rs 449',
    discount: '31% OFF',
    image: biryaniImg,
    validity: '12 PM - 4 PM',
    terms: ['Monday to Friday', 'Dine-in only', 'Limited menu'],
    category: 'daily',
    popular: false,
  },
  {
    id: 6,
    title: 'Birthday Bash',
    description: 'Celebrate your birthday with us! Free dessert platter for birthday parties of 6+.',
    originalPrice: '',
    offerPrice: 'FREE Dessert',
    discount: 'SPECIAL',
    image: heroBg,
    validity: 'Book in Advance',
    terms: ['Minimum 6 guests', 'ID required for birthday verification', 'Advance booking needed'],
    category: 'special',
    popular: true,
  },
];

const categories = [
  { id: 'all', label: 'All Offers', icon: Gift },
  { id: 'daily', label: 'Daily Deals', icon: Clock },
  { id: 'weekend', label: 'Weekend', icon: Calendar },
  { id: 'family', label: 'Family', icon: Users },
  { id: 'special', label: 'Special', icon: Flame },
];

const SpecialOffersPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredOffers = activeCategory === 'all'
    ? offers
    : offers.filter(offer => offer.category === activeCategory);

  const handleOrderNow = (offerTitle: string) => {
    const message = encodeURIComponent(`Hi! I'd like to avail the "${offerTitle}" offer at Flame Game Restaurant.`);
    window.open(`https://wa.me/92553256111?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-flame-red/20 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          
          <div className="relative z-10 container-custom text-center">
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6"
              >
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">Hot Deals</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Special <span className="flame-text">Offers</span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Discover amazing deals and save on your favorite dishes. Limited time offers you don't want to miss!
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-30">
          <div className="container-custom">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredOffers.map((offer, index) => (
                  <AnimatedCard key={offer.id} index={index}>
                    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all h-full">
                      {/* Popular Badge */}
                      {offer.popular && (
                        <motion.div
                          initial={{ x: 100 }}
                          animate={{ x: 0 }}
                          className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full"
                        >
                          🔥 Popular
                        </motion.div>
                      )}

                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={offer.image}
                          alt={offer.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        {/* Discount Badge */}
                        <motion.div
                          whileHover={{ rotate: -5, scale: 1.1 }}
                          className="absolute bottom-4 left-4 px-4 py-2 bg-flame-red text-foreground font-heading font-bold text-lg rounded-lg"
                        >
                          {offer.discount}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                          {offer.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {offer.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-center gap-3">
                          {offer.originalPrice && (
                            <span className="text-muted-foreground line-through text-sm">
                              {offer.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl font-heading font-bold text-primary">
                            {offer.offerPrice}
                          </span>
                        </div>

                        {/* Validity */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {offer.validity}
                        </div>

                        {/* Terms */}
                        <ul className="space-y-1">
                          {offer.terms.map((term, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full" />
                              {term}
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Button
                          variant="flame"
                          className="w-full gap-2"
                          onClick={() => handleOrderNow(offer.title)}
                        >
                          Order Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredOffers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No offers found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <AnimatedSection>
              <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-flame-red/20 rounded-3xl p-8 md:p-12 border border-primary/30">
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-[80px]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <Percent className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Don't Miss Our Exclusive Deals!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Contact us on WhatsApp to get notified about flash sales and members-only discounts.
                  </p>
                  <a
                    href="https://wa.me/92553256111?text=Hi! I'd like to receive updates about special offers at Flame Game Restaurant."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="flame" size="lg" className="gap-2">
                      Get Updates on WhatsApp
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SpecialOffersPage;
