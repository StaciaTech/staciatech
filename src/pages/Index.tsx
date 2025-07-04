
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
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Star
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
      title: 'Digital Experience Design',
      description: 'Human-centered design that transforms complex challenges into intuitive digital experiences',
      gradient: 'from-electric-blue to-electric-cyan',
      metrics: '99% User Satisfaction'
    },
    {
      icon: Zap,
      title: 'Next-Gen Development',
      description: 'Scalable, cloud-native applications built with cutting-edge technologies and best practices',
      gradient: 'from-vibrant-purple to-vibrant-magenta',
      metrics: '10x Faster Delivery'
    },
    {
      icon: Shield,
      title: 'Enterprise Infrastructure',
      description: 'Secure, scalable infrastructure solutions that grow with your business needs',
      gradient: 'from-energetic-lime to-energetic-yellow',
      metrics: '99.9% Uptime'
    },
    {
      icon: Brain,
      title: 'AI Innovation Lab',
      description: 'Advanced AI solutions that automate processes and unlock new business opportunities',
      gradient: 'from-electric-cyan to-vibrant-purple',
      metrics: '40% Efficiency Gain'
    }
  ];

  const products = [
    {
      name: 'Stellar Labs',
      description: 'AI Labs creating cutting-edge AI Agent products for enterprise automation',
      icon: '🚀',
      color: 'electric-blue',
      status: 'Enterprise Ready',
      category: 'AI Platform'
    },
    {
      name: 'Stello',
      description: 'AI-enabled ERP System that adapts to your business processes',
      icon: '⭐',
      color: 'vibrant-purple',
      status: 'Market Leader',
      category: 'Business Suite'
    },
    {
      name: 'The AiGentcy',
      description: 'Digital transformation consultancy with AI-first methodology',
      icon: '🔍',
      color: 'electric-cyan',
      status: 'Consulting',
      category: 'Services'
    },
    {
      name: 'Edifai',
      description: 'Personalized Learning Management System powered by adaptive AI',
      icon: '📚',
      color: 'vibrant-magenta',
      status: 'EdTech Leader',
      category: 'Education'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '50+', label: 'Enterprise Clients', icon: Award },
    { value: '10+', label: 'AI Products', icon: Brain },
    { value: '5 Years', label: 'Industry Leadership', icon: Clock }
  ];

  const testimonials = [
    {
      quote: "Stacia Tech transformed our digital infrastructure completely. Their AI solutions increased our operational efficiency by 40%.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "The level of innovation and technical expertise is unmatched. They delivered beyond our expectations.",
      author: "Michael Rodriguez",
      role: "CEO, StartupX",
      rating: 5
    }
  ];

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 stacia-hero-gradient">
          <div className="absolute inset-0 neural-bg opacity-30" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,192,255,0.1), transparent 40%)`
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-vibrant-purple rounded-full animate-float animation-delay-200 opacity-40" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-electric-cyan rounded-full animate-float animation-delay-400 opacity-80" />
        </div>
        
        <div className="stacia-container relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Headline with Enhanced Typography */}
            <div className="mb-12 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Star className="w-4 h-4 text-electric-blue mr-2" />
                <span className="text-sm font-medium text-stacia-gray-700">Trusted by 50+ Global Enterprises</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-space mb-8 leading-tight">
                <span className="block stacia-text-gradient">Digital</span>
                <span className="block text-stacia-gray-900">Excellence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-stacia-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                We architect tomorrow's digital experiences today. From AI-powered automation to 
                enterprise-grade solutions, we transform ambitious visions into market-leading realities.
              </p>

              {/* Key Value Props */}
              <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-stacia-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-electric-blue mr-2" />
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-electric-blue mr-2" />
                  <span>AI-First Approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-electric-blue mr-2" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in animation-delay-200">
              <Button asChild className="stacia-button-primary text-lg px-12 py-6 shadow-2xl shadow-electric-blue/20">
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="text-lg px-12 py-6 border-2 border-stacia-gray-300 text-stacia-gray-700 hover:bg-stacia-gray-50 transition-all duration-300">
                <Link to="/resources/case-studies">View Success Stories</Link>
              </Button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    <stat.icon className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold stacia-text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-stacia-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gradient-to-b from-white to-stacia-blue-50">
        <div className="stacia-container">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-electric-blue">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8">
              <span className="stacia-text-gradient">End-to-End</span><br />
              <span className="text-stacia-gray-900">Digital Solutions</span>
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-3xl mx-auto leading-relaxed">
              From strategic planning to seamless execution, we deliver comprehensive digital transformation 
              that drives measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="stacia-card-hover group cursor-pointer border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-stacia-gray-900">
                          {service.title}
                        </h3>
                        <div className="text-sm text-electric-blue font-semibold bg-electric-blue/10 px-3 py-1 rounded-full">
                          {service.metrics}
                        </div>
                      </div>
                      <p className="text-stacia-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-vibrant-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="text-lg px-10 py-4 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Products Showcase */}
      <section className="py-32 bg-white">
        <div className="stacia-container">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-vibrant-purple/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-vibrant-purple">Innovation Lab</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8">
              <span className="stacia-text-gradient">AI-Powered</span><br />
              <span className="text-stacia-gray-900">Product Suite</span>
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionary products that redefine industry standards through intelligent automation 
              and human-centered design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {products.map((product, index) => (
              <Card key={index} className="stacia-card-hover group cursor-pointer border-0 shadow-xl bg-gradient-to-br from-white to-stacia-blue-50/50 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{product.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-stacia-gray-900 mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-stacia-gray-500">{product.category}</span>
                          <div className={`w-2 h-2 bg-${product.color} rounded-full`} />
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                      {product.status}
                    </div>
                  </div>
                  
                  <p className="text-stacia-gray-600 text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center text-electric-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-vibrant-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="stacia-button-primary text-lg px-10 py-4">
              <Link to="/products">
                Discover All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-stacia-blue-50 to-white">
        <div className="stacia-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Trusted by Leaders</span>
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-2xl mx-auto">
              See how we've helped organizations achieve extraordinary results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-energetic-yellow fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-stacia-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-stacia-gray-900">{testimonial.author}</div>
                  <div className="text-stacia-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-r from-stacia-blue-900 via-stacia-gray-800 to-stacia-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="stacia-container text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-stacia-gray-300 mb-12 leading-relaxed">
              Transform your vision into reality with our comprehensive digital solutions. 
              Join the innovators who trust Stacia Tech to deliver excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="bg-gradient-to-r from-electric-blue to-vibrant-purple text-white px-12 py-6 text-lg hover:shadow-2xl hover:shadow-electric-blue/30 transition-all duration-300 transform hover:scale-105">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-stacia-blue-900 px-12 py-6 text-lg transition-all duration-300">
                <Link to="/resources/case-studies">See Success Stories</Link>
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
