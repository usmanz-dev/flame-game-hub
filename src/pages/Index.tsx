import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { MenuPreview } from '@/components/MenuPreview';
import { BookingSection } from '@/components/BookingSection';
import { FeaturesSection } from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MenuPreview />
        <FeaturesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
