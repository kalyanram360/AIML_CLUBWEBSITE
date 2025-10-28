import { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Activities', href: '#activities' },
  { name: 'Team', href: '#team' },
  { name: 'Magazines', href: '#editorials-simple' },
];


//make them open in new tab

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aiclub-gvp-a5212425a/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/gvpaiclub18?igsh=a3V1dWtlb2Ntem84', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:ai_club@gvpce.ac.in', label: 'Email' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        } border-b border-[#e2e8f0]`}
        data-testid="navigation-bar"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-bold bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight"
              data-testid="link-logo"
            >
              AIMOrbit
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-[#0891b2]'
                      : 'text-[#475569] hover:text-[#0891b2]'
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#0891b2]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#475569] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#059669] hover:text-white transition-all duration-300"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#475569]"
              aria-label="Toggle menu"
              data-testid="button-mobile-menu-toggle"
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              data-testid="overlay-mobile-menu"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              data-testid="drawer-mobile-menu"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center"
                    data-testid="button-close-mobile-menu"
                  >
                    <HiX className="w-6 h-6 text-[#475569]" />
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block py-2 px-4 rounded-lg text-base font-medium transition-colors ${
                        activeSection === link.href.substring(1)
                          ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white'
                          : 'text-[#475569] hover:bg-[#f1f5f9]'
                      }`}
                      data-testid={`link-mobile-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#e2e8f0]">
                  <p className="text-sm text-[#94a3b8] mb-4">Connect with us</p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f1f5f9] text-[#475569] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#059669] hover:text-white transition-all duration-300"
                        data-testid={`link-mobile-social-${social.label.toLowerCase()}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
