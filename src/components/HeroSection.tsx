
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
  Clock,
  Sparkles,
  Zap
} from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '50+', label: 'Enterprise Clients', icon: Award },
    { value: '10+', label: 'AI Products', icon: Brain },
    { value: '5 Years', label: 'Industry Leadership', icon: Clock }
  ];

  return (
    <section className="relative min-h-screen pb-[5%] md:pb-[0%] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-violet-50">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) translateY(${scrollY * 0.15}px)`
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/5 parallax-slow">
          <Sparkles className="w-6 h-6 text-violet-400 opacity-60" />
        </div>
        <div className="absolute top-2/3 right-1/5 parallax-medium">
          <Zap className="w-8 h-8 text-purple-400 opacity-40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 parallax-fast">
          <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-80" />
        </div>
      </div>
      
      <div className="stacia-container relative z-10">
        <div className="text-center mt-[20%] sm:mt-[7%] md:mt-[7%] md:mb-[5%] lg:mt-[10%]   max-w-6xl mx-auto">
          {/* Badge */}
          <div className="stacia-fade-in mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 shadow-lg">
              <Star className="w-4 h-4 text-violet-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Trusted by 50+ Global Enterprises</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="stacia-fade-in animation-delay-200 mb-12 mx-[5%] sm:mx-auto">
            {/* <h1 className="stacia-heading-xl mb-8"> */}
            <h1 className="font-bold leading-tight text-[2rem] md:text-[2rem] lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[4rem] mb-8">
              <span className="block stacia-text-gradient">Digital</span>
              <span className="block text-gray-900">Excellence</span>
            </h1>
            
            <p className="stacia-body-lg text-gray-600 max-w-4xl mx-auto mb-8">
              We architect tomorrow's digital experiences today. From AI-powered automation to 
              enterprise-grade solutions, we transform ambitious visions into market-leading realities.
            </p>

            {/* Value Props */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-violet-600 mr-2" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-violet-600 mr-2" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-violet-600 mr-2" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="stacia-fade-in animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button asChild className="stacia-button-primary text-lg px-12 py-6">
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="text-lg px-12 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-violet-300">
              <Link to="/resources/case-studies">View Success Stories</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="stacia-fade-in animation-delay-600 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="stacia-glass-card rounded-2xl h-[100%] p-6 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 transform hover:scale-105">
                  <stat.icon className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold stacia-text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
          <div className="w-1 h-3 bg-violet-600 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
