import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { toast } from 'sonner';
import biryaniImg from '@/assets/biryani.jpg';
import kebabsImg from '@/assets/kebabs.jpg';
import burgerImg from '@/assets/burger.jpg';

const menuCategories = [
  { id: 'all', name: 'All' },
  { id: 'biryani', name: 'Biryani' },
  { id: 'bbq', name: 'BBQ & Kebabs' },
  { id: 'karahi', name: 'Karahi' },
  { id: 'fast-food', name: 'Fast Food' },
  { id: 'drinks', name: 'Drinks' },
];

const menuItems = [
  { id: 1, name: 'Chicken Biryani', price: 450, category: 'biryani', image: biryaniImg, description: 'Aromatic basmati rice with tender chicken' },
  { id: 2, name: 'Mutton Biryani', price: 650, category: 'biryani', image: biryaniImg, description: 'Premium mutton with fragrant spices' },
  { id: 3, name: 'Special Biryani', price: 550, category: 'biryani', image: biryaniImg, description: 'Our signature blend with extra toppings' },
  { id: 4, name: 'Seekh Kebab', price: 350, category: 'bbq', image: kebabsImg, description: 'Spiced minced meat skewers' },
  { id: 5, name: 'Chicken Tikka', price: 450, category: 'bbq', image: kebabsImg, description: 'Marinated chicken grilled to perfection' },
  { id: 6, name: 'Malai Boti', price: 500, category: 'bbq', image: kebabsImg, description: 'Creamy chicken with special marinade' },
  { id: 7, name: 'Mutton Karahi', price: 1200, category: 'karahi', image: kebabsImg, description: 'Traditional wok-cooked mutton' },
  { id: 8, name: 'Chicken Karahi', price: 900, category: 'karahi', image: kebabsImg, description: 'Spicy chicken in tomato gravy' },
  { id: 9, name: 'Flame Burger', price: 400, category: 'fast-food', image: burgerImg, description: 'Juicy patty with special sauce' },
  { id: 10, name: 'Zinger Burger', price: 450, category: 'fast-food', image: burgerImg, description: 'Crispy chicken fillet burger' },
  { id: 11, name: 'Loaded Fries', price: 350, category: 'fast-food', image: burgerImg, description: 'Fries with cheese and sauces' },
  { id: 12, name: 'Fresh Lime', price: 80, category: 'drinks', image: biryaniImg, description: 'Refreshing lime drink' },
  { id: 13, name: 'Mint Margarita', price: 120, category: 'drinks', image: biryaniImg, description: 'Cool mint refresher' },
  { id: 14, name: 'Lassi', price: 100, category: 'drinks', image: biryaniImg, description: 'Traditional yogurt drink' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    toast.success(`${item.name} added to cart`);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const orderDetails = cart.map(item => `${item.name} x${item.quantity} - Rs ${item.price * item.quantity}`).join('\n');
    const message = encodeURIComponent(
      `🔥 *New Order from Flame Game Website*\n\n` +
      `📋 *Order Details:*\n${orderDetails}\n\n` +
      `💰 *Total: Rs ${cartTotal}*\n\n` +
      `Please confirm my order!`
    );
    window.open(`https://wa.me/92553256111?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-custom text-center">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Explore Our Dishes
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Our <span className="flame-text">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From aromatic biryanis to sizzling kebabs, discover authentic Pakistani flavors
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
          <div className="container-custom">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading font-semibold">{item.name}</h3>
                      <span className="text-primary font-bold">Rs {item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      onClick={() => addToCart(item)}
                    >
                      <Plus className="w-4 h-4" />
                      Add to Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform glow-effect"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-heading font-bold">Your Order</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-muted rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Rs {item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-background rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-background rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-destructive/20 text-destructive rounded ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rs {cartTotal}</span>
                </div>
                <Button
                  variant="flame"
                  size="lg"
                  className="w-full font-heading"
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                >
                  Order via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MenuPage;
