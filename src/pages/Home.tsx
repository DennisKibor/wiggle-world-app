import { Search, ShoppingCart, User, Heart, Star, Shield, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  const categories = [
    { name: 'Electronics', image: '/api/placeholder/200/150', count: '120+ items' },
    { name: 'Fashion', image: '/api/placeholder/200/150', count: '85+ items' },
    { name: 'Home Essentials', image: '/api/placeholder/200/150', count: '200+ items' },
    { name: 'Sports & Fitness', image: '/api/placeholder/200/150', count: '65+ items' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Premium Wireless Headphones', price: 299, originalPrice: 399, image: '/api/placeholder/300/300', rating: 4.8, reviews: 124 },
    { id: 2, name: 'Smart Fitness Watch', price: 199, originalPrice: 249, image: '/api/placeholder/300/300', rating: 4.6, reviews: 89 },
    { id: 3, name: 'Ergonomic Office Chair', price: 449, originalPrice: 599, image: '/api/placeholder/300/300', rating: 4.9, reviews: 156 },
    { id: 4, name: 'Professional Coffee Maker', price: 179, originalPrice: 229, image: '/api/placeholder/300/300', rating: 4.7, reviews: 203 },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'Excellent quality products and fast shipping. Highly recommended!', rating: 5 },
    { name: 'Mike Chen', text: 'Great customer service and competitive prices. Will shop again.', rating: 5 },
    { name: 'Emily Davis', text: 'Love the variety and quality. DoviEnterprise is my go-to store.', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-primary">DoviEnterprise</div>
              <p className="text-sm text-muted-foreground hidden md:block">Quality. Value. Trust.</p>
            </div>
            
            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-primary">DoviEnterprise</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover premium products at unbeatable prices. Your trusted partner for quality shopping.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="flex-1">Shop Now</Button>
              <Button variant="outline" size="lg" className="flex-1">View Categories</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">{category.name}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Product Image</span>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">${product.originalPrice}</span>
                    </div>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Secure Checkout</h3>
              <p className="text-muted-foreground">SSL encrypted payments</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Free delivery on orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">DoviEnterprise</h3>
              <p className="text-muted-foreground">Quality. Value. Trust.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Shipping Info</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home Essentials</li>
                <li>Sports & Fitness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Returns</li>
                <li>Track Order</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 DoviEnterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;