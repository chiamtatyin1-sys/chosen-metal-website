import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Chosen Metal Industries</h3>
            <p>
              CMI is a modern, creative and resourceful metal stamping and fabricating 
              enterprise equipped with the latest cutting edge technology and a proven 
              track record in producing quality products within targeted cost and set 
              lead time.
            </p>
          </div>
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/stamping">Stamping</Link></li>
              <li><Link to="/services/assembly">Assembly</Link></li>
              <li><Link to="/services/aluminium">Aluminium</Link></li>
              <li><Link to="/services/machining">Machining</Link></li>
              <li><Link to="/services/fabrication">Fabrication</Link></li>
              <li><Link to="/services/tooling">Tooling</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/warehousing">Warehousing</Link></li>
              <li><Link to="/sourcing">Sourcing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Contact Info</h3>
            <ul>
              <li>No.34, Jalan Masyhur 5</li>
              <li>Taman Perindustrian Cemerlang</li>
              <li>81800 Ulu Tiram</li>
              <li>Johor, Malaysia</li>
              <li>Tel: 607-861 8972</li>
              <li>Fax: 607-861 6200</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chosen Metal Industries Sdn Bhd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
