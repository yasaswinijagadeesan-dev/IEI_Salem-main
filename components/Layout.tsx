
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Committee', path: '/committee' },
    { name: 'Events', path: '/events' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <Link to="/" className="flex items-center gap-3">
              <img src="/data/iei-logo.png" alt="IEI Logo" className={`transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-14 w-14'}`} />
              <div>
                <h1 className={`text-iei-primary font-bold leading-tight transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}>The Institution of Engineers (India)</h1>
                <p className={`text-gray-600 font-medium transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Salem Local Centre (IEI-SLC)</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${location.pathname === link.path ? 'text-iei-accent underline underline-offset-8 decoration-2' : 'text-gray-700 hover:text-iei-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/membership" className="bg-iei-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-900 transition-all shadow-lg">
                Join Us
              </Link>
            </div>

            {/* Mobile Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-800 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/membership" className="block w-full text-center bg-iei-primary text-white py-3 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Become a Member
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-iei-primary text-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2 inline-block">IEI Salem</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Established to promote the general advancement of Engineering and Technology, the Salem Local Centre has been a hub for professional excellence since its inception.
            </p>
            <div className="flex space-x-4">
              <Facebook className="hover:text-iei-accent cursor-pointer" />
              <Twitter className="hover:text-iei-accent cursor-pointer" />
              <Linkedin className="hover:text-iei-accent cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-white/20 pb-2 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About IEI HQ</Link></li>
              <li><Link to="/committee" className="hover:text-white transition-colors">Our Committee</Link></li>
              <li><Link to="/membership" className="hover:text-white transition-colors">Membership Types</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Media Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Find Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-white/20 pb-2 mb-6">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Civil & Environmental</li>
              <li>Electrical & Electronics</li>
              <li>Mechanical & Production</li>
              <li>Computer Science</li>
              <li>Student Chapters</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-white/20 pb-2 mb-6">Address</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3"><MapPin className="shrink-0 text-iei-accent" size={18} /> Salem Local Centre, Sona College of Technology Campus, Salem, TN 636005</li>
              <li className="flex gap-3"><Phone className="shrink-0 text-iei-accent" size={18} /> +91 427 244 0405</li>
              <li className="flex gap-3"><Mail className="shrink-0 text-iei-accent" size={18} /> ieisalem@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          <p>© 2025 The Institution of Engineers (India), Salem Local Centre. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
