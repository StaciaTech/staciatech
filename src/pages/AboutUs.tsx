
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 stacia-hero-gradient">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Our Story</span>
            </h1>
            <p className="text-xl text-stacia-gray-600 leading-relaxed">
              The journey of innovation, passion, and digital transformation that defines Stacia Tech
            </p>
          </div>
        </div>
      </section>

      <section className="stacia-section-padding">
        <div className="stacia-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-stacia-gray-600 mb-8">
              Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
              Stacia Tech has emerged as a premier partner for digital transformation across industries.
            </p>
            
            <p className="text-lg text-stacia-gray-600 mb-8">
              Our journey began with a simple belief: that every business, regardless of size, deserves access to 
              world-class technology solutions. Today, we're proud to serve enterprises, startups, and innovative 
              companies worldwide with our comprehensive suite of digital services and AI-powered products.
            </p>

            <div className="text-center mt-12">
              <Button asChild className="stacia-button-primary">
                <Link to="/about-us/leadership">Meet Our Leadership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
