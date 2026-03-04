import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreeDShowroom from '../components/ThreeDShowroom';

const galleryImages = [
  'http://chosenmetalind.com/data/96/uploads/1file__05919182208.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__05919182208_2.png',
  'http://chosenmetalind.com/data/96/uploads/1file__05611161150.jpg'
];

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* 3D Hero Section */}
      <section className="three-d-hero">
        <div className="three-d-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Making Ideas Into Realities</h1>
            <p className="hero-subtitle">
              Chosen Metal Industries - Your Trusted Metal Stamping & Fabrication Partner
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
              <Link to="/about" className="btn btn-outline-light">Learn More</Link>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
        <ThreeDShowroom />
      </section>

      {/* About Preview Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="http://chosenmetalind.com/data/96/uploads/about-1.png" alt="About CMI" />
            </div>
            <div className="about-text">
              <h2>Transforming Ideas Into Realities</h2>
              <p>
                Chosen Metal Industries (CMI) is a modern, creative and resourceful metal 
                stamping and fabricating enterprise equipped with the latest cutting edge 
                technology and a proven track record in producing quality products within 
                targeted cost and set lead time.
              </p>
              <p>
                Endowed with and empowered by a dynamic in-house team of competently led 
                and managed group of diverse talents and skills: computer savvy designers, 
                illustrators, artisans and process integrators, CMI is capable, competent to transform mere ideas 
                and equipped from the mind into actual products, 
                and all under one roof.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive metal manufacturing solutions under one roof
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Stamping</h3>
              <p>
                Using a diverse range of machines: mechanical, pneumatic, hydro pneumatic 
                and hydraulic presses from 10 to 100tons, we literally stamp ideas into realities.
              </p>
              <Link to="/services/stamping" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Assembly</h3>
              <p>
                Cost effective assembling with design and process engineering to maximize 
                productivity and minimize waste.
              </p>
              <Link to="/services/assembly" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">⚪</div>
              <h3>Aluminium</h3>
              <p>
                Transform ordinary aluminum material into great works of craft with our 
                high end three dimensional cutters.
              </p>
              <Link to="/services/aluminium" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔩</div>
              <h3>Machining</h3>
              <p>
                Aided by the latest state of the art CAD, CNC and NC machines, parts are 
                perfectly machined to customers' specification.
              </p>
              <Link to="/services/machining" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔨</div>
              <h3>Fabrication</h3>
              <p>
                One-stop-shop fabrication with bending machines up to 85tons capable of 
                bending tubes up to 1000mm in diameter.
              </p>
              <Link to="/services/fabrication" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Tooling</h3>
              <p>
                Custom tool design and manufacturing to empower you to get the job 
                done in the right way.
              </p>
              <Link to="/services/tooling" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏭</div>
              <h3>One-Stop Shop</h3>
              <p>Complete manufacturing solutions under one roof</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Quality Focus</h3>
              <p>Producing quality products within targeted cost</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌏</div>
              <h3>Strategic Location</h3>
              <p>Located in Johor, Malaysia - next to Singapore</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>OEM Expert</h3>
              <p>Specializing in office partitions and furniture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            A glimpse of our quality manufacturing capabilities
          </p>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #1a365d, #2d5a87)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Transform Your Ideas?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Let CMI be your partner in turning your concepts into reality
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ background: '#e67e22' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
