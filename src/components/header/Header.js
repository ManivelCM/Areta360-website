import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Areta360 Logo" className="logo" />
          </Link>
        </div>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
                <span style={{ width: '10px', height: '6px' }}></span>
              </Link>
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('company')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/company" onClick={() => setIsMenuOpen(false)}>
                Company
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none" 
                  className={`dropdown-arrow ${activeDropdown === 'company' ? 'active' : ''}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <ul className={`dropdown-menu ${activeDropdown === 'company' ? 'active' : ''}`}>
                <li><Link to="/company/about" onClick={() => setIsMenuOpen(false)}>About us</Link></li>
                <li><Link to="/company/leadership" onClick={() => setIsMenuOpen(false)}>Leadership</Link></li>
                <li><Link to="/company/services" onClick={() => setIsMenuOpen(false)}>Our Services</Link></li>
                <li><Link to="/company/values" onClick={() => setIsMenuOpen(false)}>Our Values</Link></li>
                <li><Link to="/company/strategy" onClick={() => setIsMenuOpen(false)}>Our Strategy</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/career" onClick={() => setIsMenuOpen(false)}>
                Career
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 