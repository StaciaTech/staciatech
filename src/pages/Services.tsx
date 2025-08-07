
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  Award,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Settings,
  TestTube
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

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Creating visually appealing, user-centric designs that align with your brand identity and business objectives',
      features: [
        'UI/UX Design & Prototyping',
        'Brand Identity Design', 
        'Marketing Material Design',
        'Digital Graphics Creation',
        'Wireframing and Prototyping'
      ],
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'design'
    },
    {
      icon: Code,
      title: 'Development Services',
      description: 'Comprehensive solutions to create dynamic, high-performing applications and websites',
      features: [
        'Web Development (Frontend & Backend)',
        'Mobile App Development (iOS & Android)',
        'Custom Software Development',
        'API Development & Integration',
        'Cross-Platform App Development'
      ],
      gradient: 'from-indigo-600 to-violet-600',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/development'
    },
    {
      icon: Cloud,
      title: 'DevOps and Infrastructure Management',
      description: 'Streamline development lifecycle and ensure smooth, reliable operation of your applications',
      features: [
        'Infrastructure as Code (IaC)',
        'Continuous Integration and Deployment (CI/CD)',
        'Containerization',
        'Microservices Architecture',
        'Performance Optimization'
      ],
      gradient: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/devops'
    },
    {
      icon: Database,
      title: 'Data and Analytics Services',
      description: 'Transform raw data into actionable insights that drive strategic business decisions',
      features: [
        'Database Management',
        'Business Intelligence (BI)',
        'Data Visualization',
        'Big Data Solutions',
        'Machine Learning & AI'
      ],
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/data-analytics'
    },
    {
      icon: Shield,
      title: 'Cloud Infrastructure Management',
      description: 'Designing, deploying, and managing cloud environments that are optimized for high availability, security, and performance',
      features: [
        'Cloud Strategy & Consultation',
        'Cloud-Native Applications',
        'Cloud Infrastructure Setup',
        'Security & Compliance',
        'Monitoring & Optimization'
      ],
      gradient: 'from-indigo-600 to-violet-600',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/cloud'
    },
    {
      icon: TestTube,
      title: 'Quality Assurance (QA) and Testing Services',
      description: 'Comprehensive testing methodologies ensuring flawless user experiences',
      features: [
        'Automated Testing',
        'Performance Testing',
        'Security Testing',
        'User Acceptance Testing',
        'Compatibility Testing'
      ],
      gradient: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/qa-testing'
    },
    {
      icon: Settings,
      title: 'Maintenance and Support Services',
      description: 'Ongoing support ensuring peak performance and reliability of your applications',
      features: [
        'Bug Fixes and Updates',
        '24/7 Monitoring',
        'Performance Optimization',
        'Security Hardening',
        'Technical Support'
      ],
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/maintenance'
    },
    {
      icon: MessageSquare,
      title: 'Consulting Services',
      description: 'Strategic guidance for digital transformation and technology optimization',
      features: [
        'Digital Strategy',
        'Technology Assessment',
        'Process Optimization',
        'Change Management',
        'IT Consulting'
      ],
      gradient: 'from-indigo-600 to-violet-600',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/consulting'
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
                <Link to="/resources/case-studies">View Case Studies</Link>
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
              <Card key={index} className="  service-card stacia-card-hover group cursor-pointer border-0 shadow-xl bg-white overflow-hidden">
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
                
                <CardContent className="p-8 flex flex-col justify-between  h-[72%] lg:h-[75%] xl:h-[72%] ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full  group-hover:bg-violet-600  group-hover:text-white transition-all duration-300">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
            <Button asChild className="bg-white text-violet-600 hover:bg-gray-100 text-lg px-10 py-6">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-gray-600 hover:bg-white/10 text-lg px-10 py-6">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
