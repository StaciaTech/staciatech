
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Award,
  Target,
  Zap,
  BarChart3
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Case study cards animation
      gsap.fromTo('.case-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.cases-grid',
            start: 'top 80%'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const caseStudies = [
    {
      title: 'Global Tech Corp Digital Transformation',
      client: 'Fortune 500 Technology Company',
      industry: 'Technology',
      duration: '8 months',
      challenge: 'Legacy systems hindering scalability and customer experience across 15 countries',
      solution: 'Complete digital infrastructure overhaul with AI-powered automation and cloud-native architecture',
      results: [
        '300% increase in operational efficiency',
        '85% reduction in system downtime',
        '$2.5M annual cost savings',
        '40% improvement in customer satisfaction'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'AI/ML', 'Microservices'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      title: 'Healthcare Analytics Platform',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      duration: '6 months',
      challenge: 'Fragmented patient data across multiple systems causing inefficiencies and compliance issues',
      solution: 'Unified healthcare analytics platform with real-time dashboards and predictive insights',
      results: [
        '60% faster patient processing',
        '95% data accuracy improvement',
        '100% HIPAA compliance achieved',
        '25% reduction in operational costs'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Machine Learning', 'FHIR'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-indigo-600 to-violet-600'
    },
    {
      title: 'E-commerce Automation Suite',
      client: 'Mid-size Retail Chain',
      industry: 'Retail',
      duration: '4 months',
      challenge: 'Manual inventory management and customer service processes limiting growth potential',
      solution: 'AI-powered e-commerce platform with automated inventory management and chatbot integration',
      results: [
        '150% increase in online sales',
        '75% reduction in inventory errors',
        '50% decrease in customer response time',
        '200% ROI within first year'
      ],
      technologies: ['Next.js', 'Shopify API', 'AI Chatbots', 'Inventory AI', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Financial Services Modernization',
      client: 'Regional Bank',
      industry: 'Financial Services',
      duration: '12 months',
      challenge: 'Outdated banking systems and regulatory compliance requirements across multiple jurisdictions',
      solution: 'Modern banking platform with enhanced security, compliance automation, and customer portal',
      results: [
        '99.9% system uptime achieved',
        '80% faster loan processing',
        '100% regulatory compliance',
        '45% increase in customer engagement'
      ],
      technologies: ['Angular', '.NET Core', 'Azure', 'Blockchain', 'Security Suite'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Manufacturing Company',
      industry: 'Manufacturing',
      duration: '10 months',
      challenge: 'Lack of real-time visibility into production processes and equipment performance',
      solution: 'IoT-enabled manufacturing platform with predictive maintenance and real-time monitoring',
      results: [
        '35% reduction in equipment downtime',
        '20% increase in production efficiency',
        '50% decrease in maintenance costs',
        '$1.8M annual savings'
      ],
      technologies: ['IoT Sensors', 'React Dashboard', 'Edge Computing', 'ML Analytics', 'Cloud Integration'],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-indigo-600 to-violet-600'
    },
    {
      title: 'Educational Platform Revolution',
      client: 'Leading University System',
      industry: 'Education',
      duration: '7 months',
      challenge: 'Fragmented learning management systems hindering student engagement and academic outcomes',
      solution: 'Integrated AI-powered learning platform with personalized content delivery and analytics',
      results: [
        '90% student engagement increase',
        '25% improvement in academic performance',
        '60% reduction in administrative workload',
        '40% cost savings on IT infrastructure'
      ],
      technologies: ['React', 'AI/ML', 'Learning Analytics', 'Cloud Platform', 'Mobile Apps'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 stacia-hero-gradient relative overflow-hidden">
        <div className="stacia-container">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 shadow-lg mb-8">
              <Award className="w-4 h-4 text-violet-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Proven Success Stories</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-8">
              <span className="stacia-text-gradient">Case Studies</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Real success stories showcasing how we've helped businesses transform 
              and achieve extraordinary results through innovative digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">98%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">$50M+</div>
                <div className="text-gray-600 text-sm">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">15+</div>
                <div className="text-gray-600 text-sm">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="stacia-container">
          <div className="cases-grid space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="case-card border-0 shadow-2xl bg-white overflow-hidden group hover:shadow-violet-500/20 transition-all duration-700">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${study.gradient} rounded-full text-white text-sm font-semibold`}>
                      {study.industry}
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-10 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {study.client}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {study.title}
                    </h3>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-violet-600" />
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-violet-600" />
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <BarChart3 className="w-5 h-5 mr-2 text-violet-600" />
                          Key Results
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button className={`bg-gradient-to-r ${study.gradient} text-white hover:shadow-lg hover:shadow-violet-500/25 group-hover:translate-x-2 transition-all duration-300`}>
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="stacia-container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar transformational results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-violet-600 hover:bg-gray-100 text-lg px-10 py-6">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
