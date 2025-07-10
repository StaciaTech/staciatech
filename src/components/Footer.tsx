
import { Link } from 'react-router-dom';
import { Github, Instagram, Facebook, Linkedin, Mail, MapPin, Phone, ArrowRight, X } from 'lucide-react';

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import logo from "../assets/logo.svg";

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
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/staciacorp', label: 'LinkedIn' },
    { icon: BsTwitterX, href: 'https://x.com/StaciaCorp', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA==', label: 'Instagram' },
    { icon: FaFacebookF, href: 'https://www.facebook.com/staciacorp/', label: 'Facebook' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
    // { icon: X, href: '#', label: 'LinkedIn' },
    // { icon: Instagram, href: '#', label: 'Twitter' },
    // { icon: Facebook, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* CTA Section */}
      <div className="stacia-container py-16 border-b border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="stacia-heading-lg text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="stacia-body-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Stacia Tech to drive their digital innovation and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="stacia-button-primary">
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <Link to="/resources/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="stacia-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {/* <span className="text-white font-bold text-xl font-space">S</span> */}
                <img src={logo} />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Stacia Tech</span>
                <div className="text-sm text-gray-400">Digital Innovation</div>
              </div>
            </Link>

            <p className="text-gray-300 stacia-body-md mb-8 leading-relaxed">
              Premier partner for comprehensive digital solutions and groundbreaking AI-driven products.
              Empowering enterprises, startups, and innovators to thrive in the digital future.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-violet-400" />
                <span> <a href={`mailto:${"contactus@staciacorp.com"}`}>
                  contactus@staciacorp.com
                </a></span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-violet-400" />
                <span>+91-9363034150</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-violet-400" />
                {/* <span>Global Headquarters, Tech District</span> */}
                <a
                  href="https://maps.app.goo.gl/subrLwPjRTJdTcRZ8"
                  target="/blank"
                  rel="noreferrer"
                >
                  <span >
                    Ground Floor, C-53, Guindy Industrial Estate,
                    <br />
                    Guindy, Chennai - 32, Tamil Nadu
                  </span>
                </a>
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
                      target="/blank"

                      className="text-gray-300 hover:text-violet-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="stacia-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Stacia Tech. All rights reserved. Built with innovation and passion.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-violet-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
