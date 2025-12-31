import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import biryaniImg from '@/assets/biryani.jpg';
import kebabsImg from '@/assets/kebabs.jpg';
import burgerImg from '@/assets/burger.jpg';

const menuItems = [
  {
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice layered with tender chicken and traditional spices',
    price: 'Rs 450',
    image: biryaniImg,
    category: 'Signature',
  },
  {
    name: 'Tandoori Kebabs',
    description: 'Succulent skewered meat grilled to perfection in our tandoor',
    price: 'Rs 550',
    image: kebabsImg,
    category: 'BBQ',
  },
  {
    name: 'Flame Burger',
    description: 'Juicy grilled patty with melted cheese and special sauce',
    price: 'Rs 400',
    image: burgerImg,
    category: 'Fast Food',
  },
];

export function MenuPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Our Specialties
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            <span className="flame-text">Signature</span> Dishes
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our most loved dishes, crafted with authentic recipes and the freshest ingredients
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button variant="outline" size="lg" className="gap-2 font-heading uppercase tracking-wider">
              View Full Menu
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
