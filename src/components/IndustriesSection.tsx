
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  TrendingUp, 
  Radio, 
  ShoppingBag, 
  GraduationCap, 
  Zap, 
  Heart, 
  Shield, 
  Factory, 
  Plane, 
  Beaker, 
  Users,
  ArrowRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for industry cards
      gsap.fromTo('.industry-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.industries-grid',
            start: 'top 80%'
          }
        }
      );

      // Floating animation for icons
      gsap.to('.industry-icon', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      icon: Building2,
      title: 'Banking',
      description: 'Digital banking solutions and financial technology innovations',
      color: 'from-blue-600 to-blue-700',
      link: '/industries/banking'
    },
    {
      icon: TrendingUp,
      title: 'Capital Markets',
      description: 'Advanced trading platforms and market analytics',
      color: 'from-green-600 to-green-700',
      link: '/industries/capital-markets'
    },
    {
      icon: Radio,
      title: 'Communications, Media & Information Services',
      description: 'Next-gen media and communication technologies',
      color: 'from-purple-600 to-purple-700',
      link: '/industries/communications'
    },
    {
      icon: ShoppingBag,
      title: 'Consumer Goods and Distribution',
      description: 'Supply chain optimization and retail innovation',
      color: 'from-orange-600 to-orange-700',
      link: '/industries/retail'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'EdTech solutions and learning management systems',
      color: 'from-indigo-600 to-indigo-700',
      link: '/industries/education'
    },
    {
      icon: Zap,
      title: 'Energy, Resources & Utilities',
      description: 'Smart grid solutions and energy management',
      color: 'from-yellow-600 to-yellow-700',
      link: '/industries/energy'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Healthcare technology and digital health solutions',
      color: 'from-red-600 to-red-700',
      link: '/industries/healthcare'
    },
    {
      icon: Shield,
      title: 'High Tech',
      description: 'Technology acceleration and digital transformation',
      color: 'from-violet-600 to-violet-700',
      link: '/industries/high-tech'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'InsurTech and digital insurance platforms',
      color: 'from-teal-600 to-teal-700',
      link: '/industries/insurance'
    },
    {
      icon: Beaker,
      title: 'Life Sciences',
      description: 'Pharmaceutical and biotech digital solutions',
      color: 'from-cyan-600 to-cyan-700',
      link: '/industries/life-sciences'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industry 4.0 and smart manufacturing solutions',
      color: 'from-gray-600 to-gray-700',
      link: '/industries/manufacturing'
    },
    {
      icon: Users,
      title: 'Public Services',
      description: 'Government and public sector digitization',
      color: 'from-emerald-600 to-emerald-700',
      link: '/industries/public-services'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Omnichannel retail and e-commerce solutions',
      color: 'from-pink-600 to-pink-700',
      link: '/industries/retail'
    },
    {
      icon: Plane,
      title: 'Travel and Logistics',
      description: 'Transportation and logistics optimization',
      color: 'from-blue-600 to-indigo-700',
      link: '/industries/travel-logistics'
    }
  ];

  return (
    <section ref={containerRef} className="stacia-section bg-gradient-to-b from-gray-50 to-white">
      <div className="stacia-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-violet-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-violet-600">Industry Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold stacia-text-gradient mb-6">
            Select your industry. Discover our impact.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the way in innovation for over 25 years, we build greater futures for businesses 
            across multiple industries and 55 countries.
          </p>
        </div>

        <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="industry-card group cursor-pointer border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className={`industry-icon w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {industry.description}
                </p>

                <div className="flex items-center justify-center text-violet-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="stacia-button-primary text-lg px-10 py-4">
            <Link to="/industries">
              Discover All Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
