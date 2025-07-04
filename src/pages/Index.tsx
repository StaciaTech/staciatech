
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Target, 
  Users, 
  Rocket, 
  Brain,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const services = [
    {
      icon: Sparkles,
      title: 'Design Excellence',
      description: 'Crafting intuitive and engaging user experiences through cutting-edge UI/UX design',
      gradient: 'from-electric-blue to-electric-cyan'
    },
    {
      icon: Zap,
      title: 'Development Mastery',
      description: 'Building robust web and mobile applications with the latest technologies',
      gradient: 'from-vibrant-purple to-vibrant-magenta'
    },
    {
      icon: Shield,
      title: 'DevOps & Infrastructure',
      description: 'Ensuring scalable and secure operations with advanced infrastructure management',
      gradient: 'from-energetic-lime to-energetic-yellow'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to transform business processes and decision-making',
      gradient: 'from-electric-cyan to-vibrant-purple'
    }
  ];

  const products = [
    {
      name: 'Stellar Labs',
      description: 'AI Labs creating cutting-edge AI Agent products',
      icon: '🚀',
      color: 'electric-blue'
    },
    {
      name: 'Stello',
      description: 'AI-enabled ERP System for simplified business operations',
      icon: '⭐',
      color: 'vibrant-purple'
    },
    {
      name: 'The AiGentcy',
      description: 'Digital auditing and AI workflow consultancy services',
      icon: '🔍',
      color: 'electric-cyan'
    },
    {
      name: 'Edifai',
      description: 'AI-enabled personalized Learning Management System',
      icon: '📚',
      color: 'vibrant-magenta'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'AI Products' },
    { value: '24/7', label: 'Support Available' }
  ];

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden stacia-hero-gradient">
        {/* Interactive Background Elements */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,192,255,0.15), transparent 40%)`
          }}
        />
        
        <div className="stacia-container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Headline */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space mb-6">
                <span className="stacia-text-gradient">The Future</span>
                <br />
                <span className="text-stacia-gray-900">is Digital</span>
              </h1>
              <p className="text-xl md:text-2xl text-stacia-gray-600 max-w-3xl mx-auto leading-relaxed">
                Premier partner for comprehensive digital solutions and groundbreaking AI-driven products. 
                Empowering enterprises, startups, and innovators to thrive in the digital revolution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in animation-delay-200">
              <Button asChild className="stacia-button-primary text-lg px-10 py-6">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button variant="outline" asChild className="text-lg px-10 py-6 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold stacia-text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-stacia-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-electric-blue/10 rounded-full animate-float animation-delay-200" />
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-vibrant-purple/10 rounded-full animate-float animation-delay-600" />
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-electric-cyan/10 rounded-full animate-float animation-delay-400" />
        </div>
      </section>

      {/* Services Section */}
      <section className="stacia-section-padding bg-stacia-gradient-bg">
        <div className="stacia-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Comprehensive Solutions</span>
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-3xl mx-auto">
              From design to deployment, we provide end-to-end digital services that transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`stacia-card-hover animate-fade-in animation-delay-${index * 200} group cursor-pointer`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stacia-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-stacia-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="text-lg px-8 py-4">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="stacia-section-padding">
        <div className="stacia-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">AI-Powered Products</span>
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-3xl mx-auto">
              Revolutionary AI-driven solutions designed to streamline operations and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className={`stacia-card-hover animate-fade-in animation-delay-${index * 200} group cursor-pointer relative overflow-hidden`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{product.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-stacia-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <div className={`w-16 h-1 bg-${product.color} rounded-full`} />
                    </div>
                  </div>
                  <p className="text-stacia-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-vibrant-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="stacia-button-primary text-lg px-8 py-4">
              <Link to="/products">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="stacia-section-padding bg-stacia-gradient-bg">
        <div className="stacia-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-8">
                <span className="stacia-text-gradient">Why Choose</span><br />
                Stacia Tech?
              </h2>
              
              <div className="space-y-6">
                {[
                  'Cutting-edge AI integration in all solutions',
                  'End-to-end digital transformation expertise',
                  'Scalable solutions for startups to enterprises',
                  'Dedicated support and maintenance',
                  'Proven track record with 500+ successful projects'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg text-stacia-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild className="stacia-button-primary text-lg px-8 py-4">
                  <Link to="/about-us/our-story">Learn Our Story</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in animation-delay-400">
              <div className="bg-gradient-to-br from-electric-blue/10 to-vibrant-purple/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm">
                    <Globe className="h-12 w-12 text-electric-blue mx-auto mb-4" />
                    <div className="text-2xl font-bold text-stacia-gray-900">Global</div>
                    <div className="text-stacia-gray-600">Reach</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm">
                    <Rocket className="h-12 w-12 text-vibrant-purple mx-auto mb-4" />
                    <div className="text-2xl font-bold text-stacia-gray-900">Innovation</div>
                    <div className="text-stacia-gray-600">Driven</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm">
                    <Users className="h-12 w-12 text-electric-cyan mx-auto mb-4" />
                    <div className="text-2xl font-bold text-stacia-gray-900">Expert</div>
                    <div className="text-stacia-gray-600">Team</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm">
                    <Target className="h-12 w-12 text-vibrant-magenta mx-auto mb-4" />
                    <div className="text-2xl font-bold text-stacia-gray-900">Results</div>
                    <div className="text-stacia-gray-600">Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stacia-section-padding bg-gradient-to-r from-stacia-blue-900 to-stacia-gray-800 text-white">
        <div className="stacia-container text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-stacia-gray-300 mb-10 leading-relaxed">
              Join hundreds of companies that trust Stacia Tech to drive their digital innovation and growth. 
              Let's build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="bg-gradient-to-r from-electric-blue to-vibrant-purple text-white px-10 py-6 text-lg hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 transform hover:scale-105">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-stacia-blue-900 px-10 py-6 text-lg transition-all duration-300">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
