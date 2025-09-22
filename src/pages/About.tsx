import { Users, Award, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about bringing you the finest luxury products with exceptional quality.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence ensures every product meets the highest standards of luxury.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We constantly innovate to bring you the latest trends and timeless classics.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of style enthusiasts who appreciate the finer things in life.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      description: 'With over 15 years in luxury retail, Sarah founded Rustam Treasure to make premium products accessible to everyone.'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      description: 'Michael brings his expertise in fashion and design to curate our exclusive collection of products.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Experience',
      description: 'Emily ensures every customer receives personalized service and an exceptional shopping experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About Rustam Treasure
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Founded in 2020, Rustam Treasure has been dedicated to bringing you the world's most 
            exquisite luxury products. We believe that everyone deserves to experience elegance 
            and sophistication in their everyday lives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rustam Treasure began as a vision to democratize luxury. Our founder, Sarah Johnson, 
                noticed that premium products were often inaccessible to many people who 
                appreciated quality and craftsmanship.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we work directly with artisans and luxury brands worldwide to bring you 
                authentic, high-quality products at fair prices. Every item in our collection 
                is carefully selected for its exceptional quality, timeless design, and 
                craftsmanship.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/products">Explore Our Collection</Link>
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary-light to-primary rounded-2xl h-96 flex items-center justify-center shadow-hover">
                <Sparkles className="h-24 w-24 text-primary-foreground animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              Our Values
            </h2>
            <p className="text-muted-foreground animate-fade-in">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center border-0 shadow-soft hover:shadow-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground animate-fade-in">
              The passionate people behind Rustam Treasure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="text-center border-0 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-light to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-in">
            Become part of the Rustam Treasure community and discover luxury like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <Link to="/products">Start Shopping</Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;