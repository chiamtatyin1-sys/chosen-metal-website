const fabricationImages = [
  '/images/uploads/3file__05607113908.jpg',
  '/images/uploads/1file__05527133144.jpg',
  '/images/uploads/1file__05607113929.jpg',
  '/images/uploads/2file__05610170138.jpg'
];

function Fabrication() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Fabrication</h1>
            <p>Custom Metal Fabrication Services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Expert Fabrication Services</h2>
              <p>
                At CMI, we take pleasure in making life easier for our customers: their 
                fabrication needs are handled in a one-stop-shop basis. We will do all 
                possible to get your orders fabricated within your specifications, even if 
                it means sourcing for and progressing in of that rare component to complete 
                fabricate your product within the set cost and on the time frame as scheduled.
              </p>
              <p>
                <strong>Bending machines</strong> up to 85tons capable of bending tubes up to 
                1000mm in diameter.
              </p>
              <p>
                <strong>Panel saws</strong> that cut up to more than 12mm thick.
              </p>
            </div>
            <div className="content-images">
              {fabricationImages.slice(0, 2).map((image, index) => (
                <img key={index} src={image} alt={`Fabrication ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="gallery-grid">
            {fabricationImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Fabrication ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Fabrication;
