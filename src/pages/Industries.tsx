
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndustriesSection from '@/components/IndustriesSection';

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 stacia-hero-gradient">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">Industry Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sector-specific expertise and innovative solutions tailored for your industry's unique challenges and opportunities
            </p>
          </div>
        </div>
      </section>

      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default Industries;
