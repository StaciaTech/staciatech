
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
      title: 'About',
      items: [
        { title: 'Our Story', href: '/about-us/our-story' },
        { title: 'Leadership', href: '/about-us/leadership' },
        { title: 'Partnerships', href: '/about-us/partnerships' },
      ],
    },
    {
      title: 'Solutions',
      items: [
        { title: 'Services', href: '/services' },
        { title: 'Products', href: '/products' },
        { title: 'Our Brands', href: '/our-brands' },
      ],
    },
    {
      title: 'Work',
      items: [
        { title: 'Case Studies', href: '/resources/case-studies' },
        { title: 'Projects', href: '/resources/projects' },
        { title: 'Clients', href: '/clients' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'Media Kit', href: '/resources/media-kit' },
        { title: 'What\'s New', href: '/whats-new' },
        { title: 'Testimonials', href: '/testimonials' },
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
                
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2">
                    <div className="mb-3 px-3 py-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 mt-1"></div>
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block px-3 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg text-sm transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-4 ml-8">
              <Link
                to="/careers"
                className="text-gray-700 hover:text-violet-600 font-medium px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Careers
              </Link>
              <Button className="stacia-button-primary">
                <Link to="/contact">Get Started</Link>
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
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
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <Link
                  to="/careers"
                  className="block py-2 font-medium text-gray-900 hover:text-violet-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
                <Button className="stacia-button-primary w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
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
