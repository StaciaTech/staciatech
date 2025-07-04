
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Shield,
  Brain,
  ArrowRight,
  Code,
  Palette,
  Database,
  Cog
} from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      icon: Palette,
      title: 'Digital Experience Design',
      description: 'Human-centered design that transforms complex challenges into intuitive digital experiences',
      gradient: 'from-violet-600 to-purple-600',
      metrics: '99% User Satisfaction',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Code,
      title: 'Next-Gen Development',
      description: 'Scalable, cloud-native applications built with cutting-edge technologies and best practices',
      gradient: 'from-indigo-600 to-violet-600',
      metrics: '10x Faster Delivery',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Shield,
      title: 'Enterprise Infrastructure',
      description: 'Secure, scalable infrastructure solutions that grow with your business needs',
      gradient: 'from-purple-600 to-indigo-600',
      metrics: '99.9% Uptime',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Brain,
      title: 'AI Innovation Lab',
      description: 'Advanced AI solutions that automate processes and unlock new business opportunities',
      gradient: 'from-violet-600 to-purple-600',
      metrics: '40% Efficiency Gain',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="stacia-section bg-gradient-to-b from-white to-gray-50">
      <div className="stacia-container">
        <div className="text-center mb-20 stacia-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-violet-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-violet-600 mr-2" />
            <span className="text-sm font-semibold text-violet-600">Our Expertise</span>
          </div>
          <h2 className="stacia-heading-lg mb-8">
            <span className="stacia-text-gradient">End-to-End</span><br />
            <span className="text-gray-900">Digital Solutions</span>
          </h2>
          <p className="stacia-body-lg text-gray-600 max-w-3xl mx-auto">
            From strategic planning to seamless execution, we deliver comprehensive digital transformation 
            that drives measurable business outcomes.
          </p>
        </div>

        <div className="stacia-grid-2 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="stacia-card-hover group cursor-pointer border-0 shadow-xl bg-white overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <div className="text-sm text-violet-600 font-semibold bg-violet-100 px-3 py-1 rounded-full">
                    {service.metrics}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed stacia-body-md mb-6">
                  {service.description}
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
          <Button asChild variant="outline" className="text-lg px-10 py-4 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
            <Link to="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
