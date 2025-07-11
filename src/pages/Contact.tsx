
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contactus@staciacorp.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91-9363034150',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ' Ground Floor, C-53, Guindy Industrial Estate',
      description: 'Guindy, Chennai - 32, Tamil Nadu'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 Hours',
      description: 'We respond quickly'
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
              <span className="stacia-text-gradient">Get in Touch</span>
            </h1>
            <p className="text-xl text-stacia-gray-600 leading-relaxed">
              Ready to transform your business? Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="stacia-section-padding">
        <div className="stacia-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="stacia-card-hover  animate-fade-in text-center group">
                <CardContent className="p-8 flex flex-col items-center justify-between h-[100%]  ">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-stacia-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-electric-blue mb-2">
                    {info.details}
                  </p>
                  <p className="text-stacia-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <Card className="stacia-card-hover">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold font-space mb-4 stacia-text-gradient">
                      Start Your Project
                    </h2>
                    <p className="text-stacia-gray-600">
                      Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company Name" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <select 
                        id="projectType" 
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="ai-integration">AI Integration</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Project Budget</Label>
                      <select 
                        id="budget" 
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, goals, and requirements..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button className="stacia-button-primary w-full text-lg py-4">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-space mb-6 stacia-text-gradient">
                    Let's Build Something Amazing
                  </h3>
                  <p className="text-stacia-gray-600 text-lg leading-relaxed mb-6">
                    Whether you're a startup looking to build your MVP, an enterprise seeking digital transformation, 
                    or anywhere in between, we're here to help you succeed.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stacia-gray-900">Free Consultation</h4>
                        <p className="text-stacia-gray-600">We start every project with a comprehensive consultation to understand your needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-vibrant-purple rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stacia-gray-900">Custom Solutions</h4>
                        <p className="text-stacia-gray-600">Every solution is tailored to your specific business requirements and goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-electric-cyan rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stacia-gray-900">Ongoing Support</h4>
                        <p className="text-stacia-gray-600">We provide continuous support and maintenance to ensure your success.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-electric-blue/5 to-vibrant-purple/5 border-electric-blue/20">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-12 w-12 text-electric-blue mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-stacia-gray-900 mb-4">
                      Prefer to Chat?
                    </h4>
                    <p className="text-stacia-gray-600 mb-6">
                      Schedule a 30-minute call to discuss your project in detail.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule a Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
