
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
        { title: 'Our Story', href: '/about-us/our-story', description: 'Discover our journey and mission' },
        { title: 'Leadership', href: '/about-us/leadership', description: 'Meet our executive team' },
        { title: 'Partnerships', href: '/about-us/partnerships', description: 'Strategic collaborations' },
      ],
    },
    {
      title: 'Solutions',
      items: [
        { title: 'Services', href: '/services', description: 'Comprehensive digital services' },
        { title: 'Products', href: '/products', description: 'AI-powered product suite' },
        { title: 'Our Brands', href: '/our-brands', description: 'Specialized brand portfolio' },
      ],
    },
    {
      title: 'Work',
      items: [
        { title: 'Case Studies', href: '/resources/case-studies', description: 'Success stories & insights' },
        { title: 'Projects', href: '/resources/projects', description: 'Innovation showcase' },
        { title: 'Clients', href: '/clients', description: 'Trusted partnerships' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'Media Kit', href: '/resources/media-kit', description: 'Brand assets & information' },
        { title: 'What\'s New', href: '/whats-new', description: 'Latest updates & insights' },
        { title: 'Testimonials', href: '/testimonials', description: 'Client feedback' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-stacia-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="stacia-container">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-electric-blue/20">
                <span className="text-white font-bold text-xl font-space">S</span>
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold stacia-text-gradient">Stacia Tech</span>
              <div className="text-xs text-stacia-gray-500 font-medium">Digital Excellence</div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-stacia-gray-700 hover:text-electric-blue transition-colors duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-stacia-blue-50/50">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[420px] gap-2 p-6 bg-white/95 backdrop-blur-xl border border-stacia-gray-200/50 shadow-2xl shadow-black/10">
                        <div className="mb-4">
                          <h4 className="text-lg font-bold text-stacia-gray-900 mb-2">{item.title}</h4>
                          <div className="w-12 h-1 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-full" />
                        </div>
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.href} asChild>
                            <Link
                              to={subItem.href}
                              className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/5 hover:to-vibrant-purple/5 transition-all duration-300 group border border-transparent hover:border-electric-blue/20"
                            >
                              <div className="font-semibold text-stacia-gray-900 group-hover:text-electric-blue transition-colors mb-1">
                                {subItem.title}
                              </div>
                              <div className="text-sm text-stacia-gray-600 leading-relaxed">
                                {subItem.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4 ml-8">
              <Link
                to="/careers"
                className="text-stacia-gray-700 hover:text-electric-blue transition-colors duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-stacia-blue-50/50 stacia-link"
              >
                Careers
              </Link>
              <Button asChild className="stacia-button-primary shadow-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative w-12 h-12 rounded-xl hover:bg-stacia-blue-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-stacia-gray-700 transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute block w-6 h-0.5 bg-stacia-gray-700 transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`} />
              <span className={`absolute block w-6 h-0.5 bg-stacia-gray-700 transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-stacia-gray-200/50 shadow-2xl">
            <div className="p-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-3">
                  <div className="font-bold text-stacia-gray-900 text-lg">
                    {item.title}
                  </div>
                  <div className="grid gap-2 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block p-3 rounded-lg hover:bg-stacia-blue-50 transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-semibold text-stacia-gray-800 group-hover:text-electric-blue transition-colors">
                          {subItem.title}
                        </div>
                        <div className="text-sm text-stacia-gray-600 mt-1">
                          {subItem.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-stacia-gray-200 space-y-4">
                <Link
                  to="/careers"
                  className="block p-3 font-semibold text-stacia-gray-900 hover:text-electric-blue transition-colors rounded-lg hover:bg-stacia-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
                <Button asChild className="stacia-button-primary w-full">
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
