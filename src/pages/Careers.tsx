
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Users, 
  Lightbulb, 
  Target, 
  Heart, 
  Zap,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

const Careers = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex challenges'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve excellence'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable impact and value for our clients and team'
    },
    {
      icon: Heart,
      title: 'People Centered',
      description: 'We prioritize well-being, growth, and work-life balance for all team members'
    }
  ];

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Latest technology and equipment',
    'Unlimited PTO policy',
    'Team building and company retreats',
    'Innovation time for personal projects'
  ];

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Labs',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3+ years'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '3+ years'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 stacia-hero-gradient">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Join Our Mission</span>
            </h1>
            <p className="text-xl text-stacia-gray-600 leading-relaxed mb-8">
              Be part of a team that's shaping the future of digital innovation. 
              Build cutting-edge solutions, grow your career, and make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="stacia-button-primary text-lg px-8 py-4">
                View Open Positions
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="stacia-section-padding">
        <div className="stacia-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space mb-6 stacia-text-gradient">
              Why Stacia Tech?
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-3xl mx-auto">
              We're not just building products; we're crafting the future. Join a team of innovators, 
              creators, and problem-solvers who are passionate about making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="stacia-card-hover animate-fade-in text-center group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stacia-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-stacia-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-stacia-gradient-bg rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold font-space mb-4 stacia-text-gradient">
                Benefits & Perks
              </h3>
              <p className="text-lg text-stacia-gray-600">
                We invest in our people because they're our greatest asset
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-full flex-shrink-0" />
                  <span className="text-stacia-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="stacia-section-padding bg-stacia-gradient-bg">
        <div className="stacia-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space mb-6 stacia-text-gradient">
              Open Positions
            </h2>
            <p className="text-xl text-stacia-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and take your career to the next level
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="stacia-card-hover group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold text-stacia-gray-900 mb-2 group-hover:text-electric-blue transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-stacia-gray-600">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="stacia-button-primary lg:ml-8">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stacia-gray-600 mb-6">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <Button variant="outline" className="text-lg px-8 py-4">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="stacia-section-padding">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto">
            <Rocket className="h-16 w-16 text-electric-blue mx-auto mb-8" />
            <h2 className="text-4xl font-bold font-space mb-6 stacia-text-gradient">
              Ready to Launch Your Career?
            </h2>
            <p className="text-xl text-stacia-gray-600 mb-10 leading-relaxed">
              Join a team that values innovation, celebrates diversity, and empowers you to do your best work. 
              Let's build the future together.
            </p>
            <Button className="stacia-button-primary text-lg px-10 py-6">
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
