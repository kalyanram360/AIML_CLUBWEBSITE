import { FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Activities', href: '#activities' },
  { name: 'Team', href: '#team' },
];

const resources = [
  { name: '', href: '#' },
];

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aiclub-gvp-a5212425a/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/gvpaiclub18?igsh=a3V1dWtlb2Ntem84', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:ai_club@gvpce.ac.in', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0f172a] text-white" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent mb-4">
              AI Club
            </h3>
            <p className="text-[#94a3b8] mb-4 leading-relaxed">
              Empowering students to innovate and excel in the field of artificial intelligence through hands-on learning and collaboration.
            </p>
            <p className="text-[#cbd5e1] text-sm mb-6">
              Join us in shaping the future of AI, one project at a time.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-[#cbd5e1] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#059669] hover:text-white transition-all duration-300"
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-[#cbd5e1] hover:text-[#0891b2] transition-colors duration-300"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-4 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-[#cbd5e1] hover:text-[#0891b2] transition-colors duration-300"
                    data-testid={`link-footer-resource-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-4 tracking-wide">
              Contact & Newsletter
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-[#cbd5e1]">
                <FaEnvelope className="w-4 h-4 mt-1 text-[#0891b2]" />
                <span className="text-sm">aiclub@university.edu</span>
              </div>
              {/* <div className="flex items-start gap-3 text-[#cbd5e1]">
                <FaPhone className="w-4 h-4 mt-1 text-[#0891b2]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-start gap-3 text-[#cbd5e1]">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-[#0891b2]" />
                <span className="text-sm">Gayatri Vidya Parishad College of Engineering (A) </span>
              </div>
            </div>

            {/* Newsletter Form */}
            {/* <div>
              <p className="text-white font-semibold mb-3">Stay Updated</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white text-[#0f172a] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                  data-testid="input-newsletter-email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
                  data-testid="button-newsletter-submit"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-[#94a3b8] text-sm">
              © 2025 AI Club. All rights reserved.
            </p>

            {/* College Logo Placeholder */}
            <div className="text-[#cbd5e1] text-sm font-medium">
              Gayatri Vidya Parishad College of Engineering (A)
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-testid="button-back-to-top"
            >
              <span className="text-sm">Back to Top</span>
              <FaArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
