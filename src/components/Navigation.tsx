
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'What we do',
      items: [
        { title: 'Overview', href: '/services', description: 'Complete digital transformation solutions' },
        { title: 'Industries', href: '/industries', description: 'Sector-specific expertise and solutions' },
        { title: 'Services', href: '/services', description: 'Comprehensive technology services' },
        { title: 'Products and Platforms', href: '/products', description: 'Our proprietary solutions and platforms' }
      ],
    },
    {
      title: 'Who we are',
      items: [
        { title: 'Overview', href: '/about-us/our-story', description: 'Our company story and mission' },
        { title: 'About Us', href: '/about-us/our-story', description: 'Leadership and company culture' },
        { title: 'Research & Innovation', href: '/about-us/partnerships', description: 'Our innovation initiatives' },
        { title: 'Our Brand', href: '/our-brands', description: 'Brand portfolio and subsidiaries' }
      ],
    },
    {
      title: 'Insights',
      items: [
        { title: 'Case Studies', href: '/resources/case-studies', description: 'Success stories and outcomes' },
        { title: 'What\'s New', href: '/whats-new', description: 'Latest news and updates' },
        { title: 'Research & Insights', href: '/resources', description: 'Industry research and thought leadership' },
        { title: 'Media Kit', href: '/resources/media-kit', description: 'Press resources and brand assets' }
      ],
    },
    {
      title: 'Careers',
      items: [
        { title: 'Overview', href: '/careers', description: 'Join our innovative team' },
        { title: 'Life at Stacia Tech', href: '/careers', description: 'Our culture and values' },
        { title: 'Current Openings', href: '/careers', description: 'Available positions' }
      ],
    },
    {
      title: 'Newsroom',
      items: [
        { title: 'Press Releases', href: '/whats-new', description: 'Latest company announcements' },
        { title: 'Media Coverage', href: '/whats-new', description: 'Stacia Tech in the news' },
        { title: 'Awards & Recognition', href: '/testimonials', description: 'Industry recognition' }
      ],
    },
    {
      title: 'Investors',
      items: [
        { title: 'Investor Relations', href: '/contact', description: 'Financial information and updates' },
        { title: 'Annual Reports', href: '/resources', description: 'Financial performance' },
        { title: 'Governance', href: '/about-us/leadership', description: 'Corporate governance' }
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'stacia-nav-blur shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="stacia-container">
        <div className="flex items-center justify-between h-16">
          {/* Professional Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg font-space">S</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Stacia Tech</span>
              <div className="text-xs text-gray-500 font-medium">Digital Innovation</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50">
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Enhanced Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600"></div>
                    </div>
                    <div className="space-y-3">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block group/item"
                        >
                          <div className="p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200">
                            <div className="font-semibold text-gray-900 group-hover/item:text-violet-600 text-sm mb-1">
                              {subItem.title}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-4 ml-8">
              <Button className="stacia-button-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl max-h-96 overflow-y-auto">
            <div className="p-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-3">
                  <div className="font-semibold text-gray-900">
                    {item.title}
                  </div>
                  <div className="grid gap-2 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block py-2 text-gray-600 hover:text-violet-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-medium text-sm">{subItem.title}</div>
                        <div className="text-xs text-gray-500">{subItem.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-200">
                <Button className="stacia-button-primary w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
