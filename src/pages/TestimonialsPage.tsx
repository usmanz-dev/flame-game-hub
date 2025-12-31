import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Star, Quote, ThumbsUp, MessageCircle, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Food Blogger',
    avatar: 'AK',
    rating: 5,
    text: 'Flame Game has the best biryani in Gujranwala! The flavors are authentic and the portion sizes are generous. I visit here at least twice a week.',
    date: 'December 2024',
    helpful: 45,
  },
  {
    id: 2,
    name: 'Fatima Zahra',
    role: 'Regular Customer',
    avatar: 'FZ',
    rating: 5,
    text: 'Perfect place for family dinners. The staff is incredibly friendly and the ambiance is cozy. The BBQ platter is a must-try!',
    date: 'November 2024',
    helpful: 38,
  },
  {
    id: 3,
    name: 'Muhammad Ali',
    role: 'Business Owner',
    avatar: 'MA',
    rating: 4,
    text: 'Great food and reasonable prices. I often bring my business clients here. The private seating area is perfect for meetings over lunch.',
    date: 'November 2024',
    helpful: 29,
  },
  {
    id: 4,
    name: 'Sara Malik',
    role: 'Student',
    avatar: 'SM',
    rating: 5,
    text: 'Love the student discount! The burgers here are amazing and affordable. Best hangout spot with friends.',
    date: 'October 2024',
    helpful: 52,
  },
  {
    id: 5,
    name: 'Usman Shah',
    role: 'Chef',
    avatar: 'US',
    rating: 5,
    text: 'As a chef myself, I appreciate the attention to detail in every dish. The spices are perfectly balanced and the meat is always fresh.',
    date: 'October 2024',
    helpful: 67,
  },
  {
    id: 6,
    name: 'Ayesha Tariq',
    role: 'Mother of 3',
    avatar: 'AT',
    rating: 4,
    text: 'Finally a restaurant that caters to kids! The play area keeps them busy while we enjoy our meal. The kids menu is excellent.',
    date: 'September 2024',
    helpful: 41,
  },
  {
    id: 7,
    name: 'Imran Hussain',
    role: 'Software Engineer',
    avatar: 'IH',
    rating: 5,
    text: 'Their online ordering and delivery is super fast. Hot food arrives every time. The WhatsApp ordering is so convenient!',
    date: 'September 2024',
    helpful: 33,
  },
  {
    id: 8,
    name: 'Zainab Ahmed',
    role: 'Doctor',
    avatar: 'ZA',
    rating: 5,
    text: 'After long hospital shifts, Flame Game is my go-to. The food is consistently delicious and the late-night service is a blessing.',
    date: 'August 2024',
    helpful: 56,
  },
];

const featuredReview = testimonials[4]; // Usman Shah's review

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

  const currentReviews = testimonials.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          
          <div className="relative z-10 container-custom text-center">
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">666+ Reviews</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                What Our <span className="flame-text">Customers</span> Say
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Real stories from real customers. See why people love dining at Flame Game.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {renderStars(4)}
                  </div>
                  <p className="text-3xl font-heading font-bold text-primary">4.0</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-primary">666+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div className="text-center hidden sm:block">
                  <p className="text-3xl font-heading font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Recommend Us</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Review */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container-custom">
            <AnimatedSection>
              <div className="relative max-w-4xl mx-auto">
                <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/20" />
                <div className="bg-background rounded-3xl p-8 md:p-12 border border-primary/30">
                  <div className="flex items-center gap-1 mb-6">
                    <Award className="w-5 h-5 text-primary mr-2" />
                    <span className="text-primary text-sm font-medium">Featured Review</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-heading leading-relaxed mb-8">
                    "{featuredReview.text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {featuredReview.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{featuredReview.name}</p>
                        <p className="text-sm text-muted-foreground">{featuredReview.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(featuredReview.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* All Reviews */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                More <span className="flame-text">Reviews</span>
              </h2>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentReviews.map((review, index) => (
                  <AnimatedCard key={review.id} index={index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all h-full flex flex-col"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-foreground mb-6 flex-grow">
                        "{review.text}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                              {review.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{review.name}</p>
                              <p className="text-xs text-muted-foreground">{review.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <ThumbsUp className="w-4 h-4" />
                            {review.helpful}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">{review.date}</p>
                      </div>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentIndex + 1} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentIndex((prev) => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentIndex === totalPages - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Leave Review CTA */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block mb-6"
                >
                  <Star className="w-16 h-16 text-primary fill-primary" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Loved Your Experience?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Share your thoughts with us! Your feedback helps us serve you better.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.facebook.com/FlameGame.com.pk/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="flame" size="lg" className="gap-2">
                      Leave a Review on Facebook
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/92553256111?text=Hi! I'd like to share my feedback about my experience at Flame Game Restaurant."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="gap-2">
                      Send Feedback via WhatsApp
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

export default TestimonialsPage;
