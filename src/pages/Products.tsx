import { useState } from 'react';
import { Search, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import ProductSlider from '@/components/ProductSlider';

const products = [
  {
    id: 1,
    name: 'Elegant Rose Perfume',
    price: 89.99,
    originalPrice: 119.99,
    image: '/placeholder.svg',
    rating: 5,
    category: 'Fragrance',
  },
  {
    id: 2,
    name: 'Luxury Silk Scarf',
    price: 149.99,
    image: '/placeholder.svg',
    rating: 4,
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Pearl Necklace Set',
    price: 299.99,
    originalPrice: 399.99,
    image: '/placeholder.svg',
    rating: 5,
    category: 'Jewelry',
  },
  {
    id: 4,
    name: 'Designer Handbag',
    price: 249.99,
    image: '/placeholder.svg',
    rating: 4,
    category: 'Bags',
  },
  {
    id: 5,
    name: 'Premium Skincare Set',
    price: 179.99,
    originalPrice: 229.99,
    image: '/placeholder.svg',
    rating: 5,
    category: 'Beauty',
  },
  {
    id: 6,
    name: 'Cashmere Sweater',
    price: 199.99,
    image: '/placeholder.svg',
    rating: 4,
    category: 'Fashion',
  },
  {
    id: 7,
    name: 'Diamond Earrings',
    price: 599.99,
    image: '/placeholder.svg',
    rating: 5,
    category: 'Jewelry',
  },
  {
    id: 8,
    name: 'Luxury Watch',
    price: 899.99,
    originalPrice: 1199.99,
    image: '/placeholder.svg',
    rating: 4,
    category: 'Accessories',
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Fragrance', 'Accessories', 'Jewelry', 'Bags', 'Beauty', 'Fashion'];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Discover our curated collection of luxury items
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-primary text-primary-foreground' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Slider */}
      <ProductSlider title="You Might Also Like" showNavigation={false} />
    </div>
  );
};

export default Products;