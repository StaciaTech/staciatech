
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      title: 'About Us',
      items: [
        { title: 'Our Story', href: '/about-us/our-story', description: 'Learn about our journey and mission' },
        { title: 'Leadership', href: '/about-us/leadership', description: 'Meet our executive team' },
        { title: 'Partnerships', href: '/about-us/partnerships', description: 'Our strategic collaborations' },
      ],
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Products',
      href: '/products',
    },
    {
      title: 'Our Brands',
      href: '/our-brands',
    },
    {
      title: 'Resources',
      items: [
        { title: 'Case Studies', href: '/resources/case-studies', description: 'Success stories and insights' },
        { title: 'Projects', href: '/resources/projects', description: 'Our innovative work showcase' },
        { title: 'Media Kit', href: '/resources/media-kit', description: 'Brand assets and information' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-electric-blue/10'
          : 'bg-transparent'
      }`}
    >
      <div className="stacia-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl font-space">S</span>
            </div>
            <span className="text-xl font-bold stacia-text-gradient hidden sm:block">Stacia Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="text-stacia-gray-700 hover:text-electric-blue transition-colors duration-300 font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4">
                            {item.items.map((subItem) => (
                              <NavigationMenuLink key={subItem.href} asChild>
                                <Link
                                  to={subItem.href}
                                  className="block p-3 rounded-lg hover:bg-stacia-blue-50 transition-colors duration-200 group"
                                >
                                  <div className="font-medium text-stacia-gray-900 group-hover:text-electric-blue transition-colors">
                                    {subItem.title}
                                  </div>
                                  <div className="text-sm text-stacia-gray-600 mt-1">
                                    {subItem.description}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href!}
                        className={`stacia-link text-stacia-gray-700 hover:text-electric-blue transition-colors duration-300 font-medium ${
                          location.pathname === item.href ? 'text-electric-blue' : ''
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Link
                to="/careers"
                className="text-stacia-gray-700 hover:text-electric-blue transition-colors duration-300 font-medium stacia-link"
              >
                Careers
              </Link>
              <Button asChild className="stacia-button-primary">
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-stacia-gray-200 shadow-lg">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    <div>
                      <div className="font-medium text-stacia-gray-900 py-2">
                        {item.title}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block py-2 text-stacia-gray-600 hover:text-electric-blue transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block py-2 font-medium text-stacia-gray-900 hover:text-electric-blue transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-stacia-gray-200 space-y-4">
                <Link
                  to="/careers"
                  className="block py-2 font-medium text-stacia-gray-900 hover:text-electric-blue transition-colors"
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
