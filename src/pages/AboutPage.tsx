import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';
import { Award, Users, Calendar, ChefHat, Heart, Flame } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const stats = [
  { value: '10+', label: 'Years Experience', icon: Calendar },
  { value: '666+', label: 'Happy Customers', icon: Users },
  { value: '50+', label: 'Menu Items', icon: ChefHat },
  { value: '4.0', label: 'Rating Stars', icon: Award },
];

const values = [
  {
    icon: Flame,
    title: 'Authentic Flavors',
    description: 'We stay true to traditional Pakistani recipes passed down through generations, ensuring every dish carries the authentic taste of our heritage.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every meal is prepared with passion and care by our experienced chefs who pour their heart into creating memorable dining experiences.',
  },
  {
    icon: ChefHat,
    title: 'Fresh Ingredients',
    description: 'We source only the freshest local ingredients, ensuring the highest quality and taste in every dish we serve.',
  },
  {
    icon: Users,
    title: 'Family Atmosphere',
    description: 'Our restaurant is designed to be a warm, welcoming space where families can gather and create lasting memories over delicious food.',
  },
];

const timeline = [
  { year: '2014', title: 'The Beginning', description: 'Flame Game started as a small family restaurant in Gujranwala with a passion for authentic BBQ.' },
  { year: '2016', title: 'Growing Fame', description: 'Word spread about our sizzling kebabs and aromatic biryani, attracting food lovers from across the region.' },
  { year: '2019', title: 'Expansion', description: 'Moved to our current location at Ar-Rehman Business Complex with expanded seating and menu.' },
  { year: '2023', title: 'Digital Era', description: 'Launched online ordering and delivery services to serve our customers better.' },
  { year: '2024', title: 'Today', description: 'Continuing to serve authentic Pakistani cuisine with love to thousands of happy customers.' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          
          <div className="relative z-10 container-custom text-center py-20">
            <AnimatedSection>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mt-4 mb-6">
                About <span className="flame-text">Flame Game</span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                A journey of passion, tradition, and unforgettable flavors that started with a simple love for authentic Pakistani cuisine.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedCard key={stat.label} index={index}>
                  <div className="text-center group">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-4"
                    >
                      <stat.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-4xl font-heading font-bold text-primary">{stat.value}</h3>
                    <p className="text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <motion.img
                    src={restaurantInterior}
                    alt="Flame Game Restaurant"
                    className="w-full h-[500px] object-cover rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                    <p className="text-4xl font-heading font-bold">10+</p>
                    <p className="text-sm">Years of Excellence</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="space-y-6">
                  <span className="text-primary font-medium uppercase tracking-widest text-sm">
                    Who We Are
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold">
                    Where <span className="flame-text">Tradition</span> Meets Taste
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Flame Game Restaurant was born out of a deep love for authentic Pakistani cuisine. 
                    Located in the heart of Gujranwala, we've been serving our community with the finest 
                    BBQ, biryani, and traditional dishes for over a decade.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our secret? Fresh ingredients, time-honored recipes, and a passion for creating 
                    memorable dining experiences. Every dish that leaves our kitchen carries with it 
                    the warmth of our hospitality and the richness of our culinary heritage.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
                What <span className="flame-text">Drives</span> Us
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedCard key={value.title} index={index}>
                  <div className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-all h-full group">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4"
                    >
                      <value.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
                The <span className="flame-text">Timeline</span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all"
                      >
                        <span className="text-primary font-heading font-bold text-2xl">{item.year}</span>
                        <h3 className="text-xl font-heading font-semibold mt-2 mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </motion.div>
                    </div>
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
