
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Code, 
  Shield, 
  BarChart3, 
  Wrench, 
  CheckCircle, 
  MessageSquare 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Design Services',
      description: 'UI/UX Design, Graphic Design, Wireframing & Prototyping',
      features: ['User Experience Research', 'Interface Design', 'Brand Identity', 'Prototyping']
    },
    {
      icon: Code,
      title: 'Development Services',
      description: 'Web, Mobile & Custom Software Development',
      features: ['React/Next.js Development', 'Mobile Apps (iOS/Android)', 'API Development', 'Cloud Solutions']
    },
    {
      icon: Shield,
      title: 'DevOps & Infrastructure',
      description: 'Scalable Infrastructure & Operations Management',
      features: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Containerization', 'Security Implementation']
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Business Intelligence & Data Visualization',
      features: ['Database Management', 'Analytics Dashboards', 'Data Mining', 'Reporting Solutions']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing Support & Performance Optimization',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Bug Fixes', 'Updates & Patches']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive Testing & Quality Control',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing']
    },
    {
      icon: MessageSquare,
      title: 'Consulting Services',
      description: 'Strategic IT & Digital Transformation Guidance',
      features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'Change Management']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 stacia-hero-gradient">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Our Services</span>
            </h1>
            <p className="text-xl text-stacia-gray-600 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and accelerate growth
            </p>
          </div>
        </div>
      </section>

      <section className="stacia-section-padding">
        <div className="stacia-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="stacia-card-hover animate-fade-in group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stacia-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-stacia-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-stacia-gray-600">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
