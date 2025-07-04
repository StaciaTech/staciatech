
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Stellar Labs',
      description: 'AI Labs dedicated to creating cutting-edge AI Agent products for the future of automation',
      icon: '🚀',
      features: ['AI Agent Development', 'Machine Learning Research', 'Automation Solutions', 'Custom AI Models'],
      status: 'Active Development',
      link: '#'
    },
    {
      name: 'Stello',
      description: 'Comprehensive AI-enabled ERP System designed to simplify and streamline business operations',
      icon: '⭐',
      features: ['Business Process Management', 'AI-Powered Analytics', 'Resource Planning', 'Workflow Automation'],
      status: 'Production Ready',
      link: '#'
    },
    {
      name: 'Stacia Calendar',
      description: 'Advanced calendar management solution with intelligent scheduling and team coordination',
      icon: '📅',
      features: ['Smart Scheduling', 'Team Coordination', 'Meeting Management', 'Integration APIs'],
      status: 'Live',
      link: 'https://calendar.staciacorp.com'
    },
    {
      name: 'Stacia Forms',
      description: 'Dynamic forms management platform with advanced data collection and analysis capabilities',
      icon: '📋',
      features: ['Dynamic Form Builder', 'Data Analytics', 'Custom Validation', 'API Integration'],
      status: 'Live',
      link: 'https://forms.staciacorp.com'
    },
    {
      name: 'Stacia Reimbursement',
      description: 'Streamlined reimbursement management application with automated approval workflows',
      icon: '💰',
      features: ['Expense Tracking', 'Approval Workflows', 'Receipt Management', 'Reporting Dashboard'],
      status: 'Production Ready',
      link: '#'
    },
    {
      name: 'Stacia Procurement',
      description: 'Comprehensive procurement management system for efficient vendor and purchase management',
      icon: '🛒',
      features: ['Vendor Management', 'Purchase Orders', 'Approval Chains', 'Cost Analytics'],
      status: 'Production Ready',
      link: '#'
    },
    {
      name: 'Stacia Logistics',
      description: 'Advanced logistics management application for supply chain optimization',
      icon: '🚛',
      features: ['Route Optimization', 'Inventory Tracking', 'Delivery Management', 'Analytics Dashboard'],
      status: 'Beta',
      link: '#'
    },
    {
      name: 'Stacia Farmer',
      description: 'Specialized agricultural management application tailored for modern farming operations',
      icon: '🌾',
      features: ['Crop Management', 'Weather Integration', 'Yield Tracking', 'Market Analytics'],
      status: 'Development',
      link: '#'
    },
    {
      name: 'Stacia Chat',
      description: 'Secure and feature-rich communication application for team collaboration',
      icon: '💬',
      features: ['Real-time Messaging', 'File Sharing', 'Video Calls', 'Team Channels'],
      status: 'Beta',
      link: '#'
    }
  ];

  const brands = [
    {
      name: 'The AiGentcy',
      description: 'Digital auditing and consultancy services specializing in AI workflow optimization',
      icon: '🔍',
      features: ['AI Workflow Audits', 'Digital Transformation', 'Process Optimization', 'AI Implementation'],
      type: 'Consultancy Brand'
    },
    {
      name: 'Edifai',
      description: 'AI-enabled personalized Learning Management System for modern education',
      icon: '📚',
      features: ['Personalized Learning', 'AI Tutoring', 'Progress Analytics', 'Interactive Content'],
      type: 'Education Platform',
      link: 'https://www.edifai.in'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
      case 'Production Ready':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'Development':
      case 'Active Development':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 stacia-hero-gradient">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Our Products</span>
            </h1>
            <p className="text-xl text-stacia-gray-600 leading-relaxed">
              Revolutionary AI-driven solutions and comprehensive business applications designed for the digital future
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="stacia-section-padding">
        <div className="stacia-container">
          <h2 className="text-3xl font-bold text-center mb-12 stacia-text-gradient">Core Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="stacia-card-hover animate-fade-in group relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{product.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stacia-gray-900 mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-stacia-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-stacia-gray-600">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {product.link && product.link !== '#' && (
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group-hover:bg-electric-blue group-hover:text-white transition-all duration-300"
                    >
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Products */}
      <section className="stacia-section-padding bg-stacia-gradient-bg">
        <div className="stacia-container">
          <h2 className="text-3xl font-bold text-center mb-12 stacia-text-gradient">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <Card key={index} className="stacia-card-hover animate-fade-in group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{brand.icon}</div>
                    <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-xs font-medium">
                      {brand.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stacia-gray-900 mb-4">
                    {brand.name}
                  </h3>
                  
                  <p className="text-stacia-gray-600 mb-6 leading-relaxed">
                    {brand.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {brand.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-stacia-gray-600">
                        <div className="w-2 h-2 bg-vibrant-purple rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {brand.link && (
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group-hover:bg-vibrant-purple group-hover:text-white transition-all duration-300"
                    >
                      <a href={brand.link} target="_blank" rel="noopener noreferrer">
                        Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
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

export default Products;
