
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const WhatsNew = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 stacia-hero-gradient">
        <div className="stacia-container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="stacia-text-gradient">What's New</span>
            </h1>
            <p className="text-xl text-stacia-gray-600 leading-relaxed">
              Latest updates, product releases, and company news from Stacia Tech
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsNew;
