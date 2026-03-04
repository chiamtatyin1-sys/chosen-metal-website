import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="http://chosenmetalind.com/data/96/uploads/logo.png" alt="Chosen Metal Industries" />
          </Link>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">Services</span>
              <div className="services-dropdown">
                <Link to="/services/stamping" className="dropdown-item">Stamping</Link>
                <Link to="/services/assembly" className="dropdown-item">Assembly</Link>
                <Link to="/services/aluminium" className="dropdown-item">Aluminium</Link>
                <Link to="/services/machining" className="dropdown-item">Machining</Link>
                <Link to="/services/fabrication" className="dropdown-item">Fabrication</Link>
                <Link to="/services/tooling" className="dropdown-item">Tooling</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link 
                to="/warehousing" 
                className={`nav-link ${isActive('/warehousing') ? 'active' : ''}`}
              >
                Warehousing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/sourcing" 
                className={`nav-link ${isActive('/sourcing') ? 'active' : ''}`}
              >
                Sourcing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </nav>

          <div 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
