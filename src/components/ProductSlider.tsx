import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import products from "../../data.json"


interface ProductSliderProps {
  title?: string;
  showNavigation?: boolean;
}

const ProductSlider = ({ title = 'Featured Products', showNavigation = true }: ProductSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1);
      } else if (window.innerWidth < 768) {
        setVisibleProducts(2);
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(3);
      } else {
        setVisibleProducts(4);
      }
    };

    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= products.length - visibleProducts ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [visibleProducts]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - visibleProducts ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? products.length - visibleProducts : prevIndex - 1
    );
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground animate-fade-in">{title}</h2>
          {showNavigation && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
                style={{ animation: `fade-in 0.6s ease-out ${index * 0.1}s both` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: products.length - visibleProducts + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;