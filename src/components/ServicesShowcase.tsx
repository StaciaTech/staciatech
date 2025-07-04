
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Shield,
  Brain,
  ArrowRight
} from 'lucide-react';

const ServicesShowcase = () => {
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

  return (
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
  );
};

export default ServicesShowcase;
