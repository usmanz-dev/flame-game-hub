import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Play, Image, Video } from 'lucide-react';
import biryaniImg from '@/assets/biryani.jpg';
import kebabsImg from '@/assets/kebabs.jpg';
import burgerImg from '@/assets/burger.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const galleryItems = [
  { id: 1, src: heroBg, alt: 'Signature Dishes', category: 'Food', type: 'image' },
  { id: 2, src: biryaniImg, alt: 'Chicken Biryani', category: 'Food', type: 'image' },
  { id: 3, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', alt: 'Kitchen Tour', category: 'Videos', type: 'video', thumbnail: restaurantInterior },
  { id: 4, src: kebabsImg, alt: 'Sizzling Kebabs', category: 'BBQ', type: 'image' },
  { id: 5, src: burgerImg, alt: 'Flame Burger', category: 'Food', type: 'image' },
  { id: 6, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', alt: 'Making Biryani', category: 'Videos', type: 'video', thumbnail: biryaniImg },
  { id: 7, src: restaurantInterior, alt: 'Restaurant Ambiance', category: 'Interior', type: 'image' },
  { id: 8, src: kebabsImg, alt: 'Tandoori Tikka', category: 'BBQ', type: 'image' },
  { id: 9, src: biryaniImg, alt: 'Special Biryani', category: 'Food', type: 'image' },
  { id: 10, src: restaurantInterior, alt: 'Dining Area', category: 'Interior', type: 'image' },
  { id: 11, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', alt: 'Customer Testimonials', category: 'Videos', type: 'video', thumbnail: heroBg },
];

const categories = [
  { id: 'All', icon: Image },
  { id: 'Food', icon: Image },
  { id: 'BBQ', icon: Image },
  { id: 'Interior', icon: Image },
  { id: 'Videos', icon: Video },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentItem = galleryItems.find(item => item.id === selectedItem);

  const navigateItem = (direction: 'prev' | 'next') => {
    if (selectedItem === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem);
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
      setSelectedItem(filteredItems[prevIndex].id);
    } else {
      const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
      setSelectedItem(filteredItems[nextIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-custom text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium uppercase tracking-widest text-sm"
            >
              Visual Journey
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-heading font-bold mt-4 mb-6"
            >
              Our <span className="flame-text">Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore the flavors and ambiance of Flame Game through our collection of images and videos
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 bg-background sticky top-20 z-30 backdrop-blur-md">
          <div className="container-custom">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.id}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedItem(item.id)}
                    className="group relative aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center"
                        >
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </motion.div>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-foreground font-medium">{item.alt}</p>
                      <span className="text-primary text-sm">{item.category}</span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateItem('prev')}
              className="absolute left-4 md:left-8 p-3 bg-muted rounded-full hover:bg-muted/80 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full max-h-[80vh] mx-16"
            >
              {currentItem.type === 'video' ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={currentItem.src}
                    title={currentItem.alt}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl mx-auto"
                />
              )}
            </motion.div>

            <button
              onClick={() => navigateItem('next')}
              className="absolute right-4 md:right-8 p-3 bg-muted rounded-full hover:bg-muted/80 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
