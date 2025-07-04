
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Code, 
  Shield, 
  BarChart3, 
  Wrench, 
  CheckCircle, 
  MessageSquare,
  ArrowRight,
  Zap,
  Globe,
  Users,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Service cards staggered animation
      gsap.fromTo('.service-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%'
          }
        }
      );

      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Process steps animation
      gsap.fromTo('.process-step', 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 70%'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: 'Design Services',
      description: 'Human-centered design that transforms complex challenges into intuitive digital experiences',
      features: ['User Experience Research', 'Interface Design', 'Brand Identity', 'Prototyping & Wireframing'],
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Code,
      title: 'Development Services',
      description: 'Scalable, cloud-native applications built with cutting-edge technologies and best practices',
      features: ['React/Next.js Development', 'Mobile Apps (iOS/Android)', 'API Development', 'Cloud Solutions'],
      gradient: 'from-indigo-600 to-violet-600',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Shield,
      title: 'DevOps & Infrastructure',
      description: 'Secure, scalable infrastructure solutions that grow with your business needs',
      features: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Containerization', 'Security Implementation'],
      gradient: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights that drive strategic business decisions',
      features: ['Database Management', 'Analytics Dashboards', 'Data Mining', 'Reporting Solutions'],
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Comprehensive ongoing support ensuring peak performance and reliability',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Bug Fixes', 'Updates & Patches'],
      gradient: 'from-indigo-600 to-violet-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing methodologies ensuring flawless user experiences',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing'],
      gradient: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: MessageSquare,
      title: 'Consulting Services',
      description: 'Strategic guidance for digital transformation and technology optimization',
      features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'Change Management'],
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We dive deep into your business requirements, challenges, and goals to create a comprehensive understanding of your needs.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a tailored roadmap with clear milestones, timelines, and success metrics aligned with your objectives.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'We bring your vision to life with cutting-edge technologies, following industry best practices and agile methodologies.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards of performance, security, and user experience.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Seamless deployment with comprehensive monitoring and support to ensure a successful launch and optimal performance.'
    },
    {
      step: '06',
      title: 'Support & Evolution',
      description: 'Ongoing maintenance, updates, and enhancements to keep your solution at the forefront of technology.'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 stacia-hero-gradient relative overflow-hidden">
        <div className="parallax-bg absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="stacia-container relative z-10">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 shadow-lg mb-8">
              <Zap className="w-4 h-4 text-violet-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Comprehensive Digital Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-8">
              <span className="stacia-text-gradient">Transform Your</span><br />
              <span className="text-gray-900">Digital Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              From strategy to execution, we deliver end-to-end digital solutions that drive 
              measurable business outcomes and sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="stacia-button-primary text-lg px-10 py-6">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-10 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                View Case Studies
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">50+</div>
                <div className="text-gray-600 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold stacia-text-gradient mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="parallax-section py-20 bg-white">
        <div className="stacia-container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold stacia-text-gradient mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card stacia-card-hover group cursor-pointer border-0 shadow-xl bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-violet-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="stacia-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold stacia-text-gradient mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="process-step flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="stacia-container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can accelerate your digital transformation journey.
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

export default Services;
