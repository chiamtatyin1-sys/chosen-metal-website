const machiningImages = [
  '/images/uploads/1file__05919222836.jpg',
  '/images/uploads/2file__05610170229.jpg',
  '/images/uploads/2file__05527133144.jpg',
  '/images/uploads/2file__06324162135.jpg'
];

function Machining() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Machining</h1>
            <p>Precision CNC Machining Services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Precision Machining</h2>
              <p>
                Aided by the latest state of the art CAD, CNC and NC machines, coupled 
                with the skills and meticulous attention of our experienced artisans, 
                parts are perfectly machined to customers' specification.
              </p>
            </div>
            <div className="content-images">
              {machiningImages.slice(0, 2).map((image, index) => (
                <img key={index} src={image} alt={`Machining ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="gallery-grid">
            {machiningImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Machining ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Machining;
