import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyInfo } from '../data/defaultData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    'Telecommunications Infrastructure',
    'Water Infrastructure',
    'Civil Construction',
    'Energy & Electrical Works',
    'Safety & Quality Assurance',
    'Project Management',
  ];

  return (
    <footer className="bg-charcoal-dark text-white">
      {/* Top Section */}
      <div className="site-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-charcoal-dark font-bold text-lg font-[var(--font-heading)]">M</span>
              </div>
              <div>
                <h3 className="font-bold text-lg font-[var(--font-heading)]">Maruti Nandan</h3>
                <p className="text-primary text-[10px] tracking-[0.2em] uppercase font-semibold">Associate</p>
              </div>
            </div>
            <p className="text-steel-light text-sm leading-relaxed mb-6">
              Turnkey infrastructure services across telecommunications, water, civil, and energy sectors with
              a focus on quality, safety, and dependable site execution.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF size={14} />, href: companyInfo.social.facebook },
                { icon: <FaInstagram size={14} />, href: companyInfo.social.instagram },
                { icon: <FaLinkedinIn size={14} />, href: companyInfo.social.linkedin },
                { icon: <FaTwitter size={14} />, href: companyInfo.social.twitter },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-steel-light hover:bg-primary hover:text-charcoal-dark transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-[var(--font-heading)]">
              Quick Links
              <div className="w-10 h-0.5 bg-primary mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-steel-light hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-[var(--font-heading)]">
              Our Services
              <div className="w-10 h-0.5 bg-primary mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-steel-light hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-[var(--font-heading)]">
              Contact Us
              <div className="w-10 h-0.5 bg-primary mt-2"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-steel-light text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary flex-shrink-0" size={13} />
                <a href={`tel:${companyInfo.phone[0]}`} className="text-steel-light text-sm hover:text-primary transition-colors">
                  {companyInfo.phone[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" size={13} />
                <a href={`mailto:${companyInfo.email}`} className="text-steel-light text-sm hover:text-primary transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <h5 className="text-sm font-semibold mb-2">Working Hours</h5>
              <p className="text-steel-light text-xs">Mon - Fri: {companyInfo.workingHours.weekdays}</p>
              <p className="text-steel-light text-xs">Saturday: {companyInfo.workingHours.saturday}</p>
              <p className="text-steel-light text-xs">Sunday: {companyInfo.workingHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="site-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-light text-sm">
            © {new Date().getFullYear()} Maruti Nandan Associate. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-steel-light">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
