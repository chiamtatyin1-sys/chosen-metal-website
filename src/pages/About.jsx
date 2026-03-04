const aboutImages = [
  'http://chosenmetalind.com/data/96/uploads/about-3.png',
  'http://chosenmetalind.com/data/96/uploads/about-1.png',
  'http://chosenmetalind.com/data/96/uploads/about-2.png'
];

function About() {
  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>About Us</h1>
            <p>Making Ideas Into Realities Since 2012</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Chosen Metal Industries (CMI)</h2>
              <p>
                Chosen Metal Industries (CMI) is a modern, creative and resourceful metal 
                stamping and fabricating enterprise equipped with the latest cutting edge 
                technology and a proven track record in producing quality products within 
                targeted cost and set lead time, mostly meeting and sometimes even exceeding 
                the expectations of the most fastidious customer.
              </p>
              <p>
                Endowed with and empowered by a dynamic in-house team of competently lead 
                and managed group of diverse talents and skills: computer savvy designers, 
                illustrators, artisans and process integrators, CMI is capable, competent 
                and equipped to transform mere ideas from the mind into actual products, 
                and all under one roof.
              </p>
              <p>
                Our ability in empowering customers to incubate concepts into realities is 
                so effective and convenient to them, that the whole metamorphosis is likened 
                to an experience in painless conception and child birth.
              </p>
              <p>
                At CMI, we take pleasure in walking that extra mile and in empowering our 
                customers to actualize their dreams, all the way, from product conceptualization 
                to material planning, sourcing, production and even delivery scheduling.
              </p>
            </div>
            <div className="content-images">
              {aboutImages.map((image, index) => (
                <img key={index} src={image} alt={`About ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OEM Specialization */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-images">
              <img src="http://chosenmetalind.com/data/96/uploads/1file__05611161150.jpg" alt="OEM Products" />
            </div>
            <div className="content-text">
              <h2>Our OEM Specialization</h2>
              <p>
                While CMI can literally customize-produce any stamp-able metal products to 
                customers' specifications in a friendly-integrated-one-stop-shop approach, 
                our "crown jewel" is in OEM for office partitions and office furniture.
              </p>
              <p>
                Others area of OEM includes electronic, electrical and components and accessories.
              </p>
              <p>
                Our quality production in OEM of office partitions and furniture are so well 
                crafted that they are proudly adopted and showcased by some of the most 
                prestigious and successful multinational organizations around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Strategic Advantage</h2>
              <p>
                At CMI, you also get good value for your money because we pass on to you, 
                the cost savings we consciously engineered for through the leverage of 
                value by strategically locating and positioning ourselves in Johor Bahru, Malaysia.
              </p>
              <p>
                Johor Bahru, situated just next door to Singapore and at the southern most 
                tip of the Malay Peninsula, we get to enjoy the best of both worlds: A low 
                cost Malaysian production facility and a highly effective Singapore standard 
                supply chain logistics support system.
              </p>
              <p>
                At CMI, dreams do come true, because we help transform ideas into conformed realities.
              </p>
            </div>
            <div className="content-images single">
              <img src="http://chosenmetalind.com/data/96/uploads/1file__05919182208.jpg" alt="Strategic Location" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📅</div>
              <h3>Since 2012</h3>
              <p>Over a decade of experience in metal manufacturing</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏭</div>
              <h3>One-Stop Shop</h3>
              <p>Complete solutions from design to delivery</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Serving clients worldwide</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Quality First</h3>
              <p>ISO standards maintained</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
