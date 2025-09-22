import { ArrowRight, Star, TruckIcon, Shield, SmilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductSlider from '@/components/ProductSlider';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Discover
                <span className="text-gradient block">Rustam Treasure</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Curated treasures, wrapped in love 🌸<br/>
                 <span>Soft surprises, timeless smiles</span> 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary group">
                  <Link to="/products">
                    Shop Now 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-secondary">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Luxury products showcase"
                className="w-full h-96 object-cover rounded-2xl shadow-hover animate-float"
              />
              <div className="absolute -top-6 -right-6 bg-background rounded-full p-4 shadow-soft">
                <Star className="h-8 w-8 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TruckIcon,
                title: 'Free Delivery',
                description: 'Free shipping on orders over Rs1500'
              },
              {
                icon: Shield,
                title: 'Secure Payment',
                description: '100% secure payment processing'
              },
              {
                icon: SmilePlus,
                title: 'Satisfy Client',
                description: '100 plus satisfy clients'
              }
            ].map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center border-0 shadow-soft hover:shadow-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductSlider title="Featured Products" />

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Ready to Shop?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Join thousands of satisfied customers who trust Rustam Treasure for their luxury needs.
          </p>
          <Button asChild size="lg" className="btn-primary animate-scale-in">
            <Link to="/products">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;