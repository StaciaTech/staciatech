
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import IndustriesSection from '@/components/IndustriesSection';
import ChatBot from '@/components/ChatBot';
import LoadingAnimation from '@/components/LoadingAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Star,
  Users,
  Globe,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const products = [
    {
      name: 'Stellar Labs',
      description: 'AI Labs creating cutting-edge AI Agent products for enterprise automation',
      icon: '🚀',
      color: 'violet',
      status: 'Enterprise Ready',
      category: 'AI Platform',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Stello',
      description: 'AI-enabled ERP System that adapts to your business processes',
      icon: '⭐',
      color: 'purple',
      status: 'Market Leader',
      category: 'Business Suite',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'The AiGentcy',
      description: 'Digital transformation consultancy with AI-first methodology',
      icon: '🔍',
      color: 'indigo',
      status: 'Consulting',
      category: 'Services',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Edifai',
      description: 'Personalized Learning Management System powered by adaptive AI',
      icon: '📚',
      color: 'violet',
      status: 'EdTech Leader',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      quote: "Stacia Tech transformed our digital infrastructure completely. Their AI solutions increased our operational efficiency by 40%.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b4e5d4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The level of innovation and technical expertise is unmatched. They delivered beyond our expectations.",
      author: "Michael Rodriguez",
      role: "CEO, StartupX",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Working with Stacia Tech was a game-changer for our digital transformation journey.",
      author: "Emily Watson",
      role: "VP Innovation, GlobalTech",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <ServicesShowcase />
      <IndustriesSection />

      {/* Products Showcase */}
      <section className="stacia-section bg-white">
        <div className="stacia-container">
          <div className="text-center mb-20 stacia-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-purple-600">Innovation Lab</span>
            </div>
            <h2 className="stacia-heading-lg mb-8">
              <span className="stacia-text-gradient">AI-Powered</span><br />
              <span className="text-gray-900">Product Suite</span>
            </h2>
            <p className="stacia-body-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionary products that redefine industry standards through intelligent automation 
              and human-centered design.
            </p>
          </div>

          <div className="stacia-grid-2 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="stacia-card-hover group  cursor-pointer border-0 shadow-xl bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">{product.icon}</div>
                  <div className="absolute top-4 right-4 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {product.status}
                  </div>
                </div>
                
                <CardContent className="p-8 relative flex flex-col justify-between h-[55%]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  
                  <p className="text-gray-600 stacia-body-md mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center text-violet-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center stacia-fade-in">
            <Button asChild className="stacia-button-primary text-lg px-10 py-4">
              <Link to="/products">
                Discover All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="stacia-section bg-gradient-to-b from-gray-50 to-white">
        <div className="stacia-container">
          <div className="text-center mb-16 stacia-fade-in">
            <h2 className="stacia-heading-md mb-6">
              <span className="stacia-text-gradient">Trusted by Leaders</span>
            </h2>
            <p className="stacia-body-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped organizations achieve extraordinary results
            </p>
          </div>

          <div className="stacia-grid max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white p-8 stacia-card-hover flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="stacia-body-md text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stacia-section bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-purple-900/20" />
        <div className="stacia-container text-center relative z-10">
          <div className="max-w-4xl mx-auto stacia-fade-in">
            <h2 className="stacia-heading-lg text-white mb-8">
              Ready to Lead the Future?
            </h2>
            <p className="stacia-body-lg text-gray-300 mb-12">
              Transform your vision into reality with our comprehensive digital solutions. 
              Join the innovators who trust Stacia Tech to deliver excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="stacia-button-primary text-lg px-12 py-6">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-gray-600 hover:bg-white hover:text-gray-900 px-12 py-6 text-lg">
                <Link to="/resources/case-studies">See Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
