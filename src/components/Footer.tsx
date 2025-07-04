
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { title: 'Our Story', href: '/about-us/our-story' },
        { title: 'Leadership', href: '/about-us/leadership' },
        { title: 'Partnerships', href: '/about-us/partnerships' },
        { title: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { title: 'Services', href: '/services' },
        { title: 'Products', href: '/products' },
        { title: 'Our Brands', href: '/our-brands' },
        { title: 'Clients', href: '/clients' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Case Studies', href: '/resources/case-studies' },
        { title: 'Projects', href: '/resources/projects' },
        { title: 'Media Kit', href: '/resources/media-kit' },
        { title: 'What\'s New', href: '/whats-new' },
      ],
    },
    {
      title: 'Support',
      links: [
        { title: 'Contact Us', href: '/contact' },
        { title: 'Testimonials', href: '/testimonials' },
        { title: 'Privacy Policy', href: '#' },
        { title: 'Terms of Service', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gradient-to-br from-stacia-blue-900 via-stacia-gray-800 to-stacia-blue-900 text-white">
      {/* Neural Network Background */}
      <div className="neural-bg">
        <div className="stacia-container stacia-section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl font-space">S</span>
                </div>
                <span className="text-2xl font-bold text-white">Stacia Tech</span>
              </Link>
              
              <p className="text-stacia-gray-300 text-lg mb-8 leading-relaxed">
                Premier partner for comprehensive digital solutions and groundbreaking AI-driven products. 
                Empowering enterprises, startups, and innovators to thrive in the digital future.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-stacia-gray-300">
                  <Mail className="h-5 w-5 text-electric-blue" />
                  <span>hello@staciatech.com</span>
                </div>
                <div className="flex items-center space-x-3 text-stacia-gray-300">
                  <Phone className="h-5 w-5 text-electric-blue" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-stacia-gray-300">
                  <MapPin className="h-5 w-5 text-electric-blue" />
                  <span>Global Headquarters, Tech District</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.href}
                        className="text-stacia-gray-300 hover:text-electric-blue transition-colors duration-300 stacia-link"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-stacia-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-stacia-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Stacia Tech. All rights reserved. Built with innovation and passion.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-stacia-gray-400 hover:text-electric-blue transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 bg-gradient-to-r from-electric-blue/10 to-vibrant-purple/10 rounded-2xl border border-electric-blue/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-stacia-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust Stacia Tech to drive their digital innovation and growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-blue to-vibrant-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
