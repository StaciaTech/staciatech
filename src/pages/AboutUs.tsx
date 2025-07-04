
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  Award,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Values cards animation
      gsap.fromTo('.value-card', 
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 80%'
          }
        }
      );

      // Timeline animation
      gsap.fromTo('.timeline-item', 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.timeline-section',
            start: 'top 70%'
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number', 
        { innerText: 0 },
        { 
          innerText: (i, el) => el.getAttribute('data-value'),
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that define the future.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to our clients\' unique needs, ensuring maximum value and impact.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions span across industries and continents, creating positive change worldwide.',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Stacia Tech was founded with a vision to democratize digital transformation for businesses of all sizes.'
    },
    {
      year: '2020',
      title: 'First Enterprise Client',
      description: 'Secured our first major enterprise contract, establishing our reputation in the market.'
    },
    {
      year: '2021',
      title: 'AI Innovation Lab',
      description: 'Launched Stellar Labs, our dedicated AI research and development division.'
    },
    {
      year: '2022',
      title: 'Product Suite Launch',
      description: 'Released our comprehensive suite of business applications including Stello ERP.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations internationally, serving clients across multiple continents.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as a leading innovator in AI-powered business solutions and digital transformation.'
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Delivered' },
    { number: 50, suffix: '+', label: 'Enterprise Clients' },
    { number: 15, suffix: '+', label: 'AI Products' },
    { number: 99, suffix: '.9%', label: 'Uptime SLA' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 stacia-hero-gradient relative overflow-hidden">
        <div className="stacia-container">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-8">
              <span className="stacia-text-gradient">Our Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Born from a vision to bridge the gap between ambitious ideas and digital reality, 
              Stacia Tech has evolved into a powerhouse of innovation, transforming businesses 
              through cutting-edge technology and human-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="stacia-container">
          <div className="grid md:grid-cols-2 gap-16">
            <Card className="border-0 shadow-xl bg-white group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower businesses of all sizes with intelligent, scalable, and innovative 
                  digital solutions that drive sustainable growth and competitive advantage in 
                  the digital-first economy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the global leader in AI-powered digital transformation, creating a future 
                  where technology seamlessly integrates with human potential to solve the world's 
                  most complex challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-20 bg-white">
        <div className="stacia-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold stacia-text-gradient mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="value-card border-0 shadow-xl bg-white group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="stacia-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold stacia-text-gradient mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how we've grown
            </p>
          </div>

          <div ref={timelineRef} className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <div className="text-2xl font-bold text-violet-600">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-violet-600 rounded-full mt-2 mr-8 relative">
                  <div className="absolute top-4 left-1/2 w-0.5 h-12 bg-gray-300 -translate-x-1/2 last:hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="stacia-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl font-bold mb-2">
                  <span className="stat-number" data-value={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-violet-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
