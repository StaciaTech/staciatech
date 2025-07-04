
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Brain,
  Clock
} from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '50+', label: 'Enterprise Clients', icon: Award },
    { value: '10+', label: 'AI Products', icon: Brain },
    { value: '5 Years', label: 'Industry Leadership', icon: Clock }
  ];

  return (
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
          {/* Main Headline */}
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

          {/* CTA Section */}
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

          {/* Stats Grid */}
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
  );
};

export default HeroSection;
