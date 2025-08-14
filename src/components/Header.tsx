import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Vouchers', href: '/#vouchers' },
    { name: 'Reservation', href: '/reservation' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="glass-card border-b border-white/30 sticky top-0 z-50 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced visibility */}
          <Link to="/" className="flex items-center group">
            <div className="p-2">
              <img 
                src="/website-logo.jpeg"
                alt="Payless"
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                style={{ height: '2.8rem', borderRadius: '4px' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/' && location.hash === item.href.substring(1)
                      ? 'text-brand-orange'
                      : 'text-navy-900 hover:text-brand-orange'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-brand-orange'
                      : 'text-navy-900 hover:text-brand-orange'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/get-your-card"
              className="glass-button-primary px-6 py-2 rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your Card
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-navy-900 hover:bg-white/20 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/30">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-left ${
                      location.pathname === '/' && location.hash === item.href.substring(1)
                        ? 'text-brand-orange bg-white/20'
                        : 'text-navy-900 hover:text-brand-orange hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-brand-orange bg-white/20'
                        : 'text-navy-900 hover:text-brand-orange hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                to="/get-your-card"
                onClick={() => setIsMenuOpen(false)}
                className="glass-button-primary px-6 py-3 rounded-xl transition-all duration-200 font-medium text-center"
              >
                Get Your Card
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;