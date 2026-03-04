const sourcingImages = [
  'http://chosenmetalind.com/data/96/uploads/3file__06324162044.jpg',
  'http://chosenmetalind.com/data/96/uploads/2file__06324162044.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__06324162059.jpg',
  'http://chosenmetalind.com/data/96/uploads/2file__06324162059.jpg',
  'http://chosenmetalind.com/data/96/uploads/3file__06324162059.jpg',
  'http://chosenmetalind.com/data/96/uploads/3file__06324162117.jpg',
  'http://chosenmetalind.com/data/96/uploads/2file__06324162117.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__06324162117.jpg'
];

function Sourcing() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Sourcing</h1>
            <p>Global Sourcing & Procurement Services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Global Sourcing Network</h2>
              <p>
                Transforming ideas into conformed realities is a very tedious support 
                dependent process. Not only does it demand great creative brain power, 
                it also requires networking prowess in connecting the right people and 
                material for the right job at the right price and right timing.
              </p>
              <p>
                At CMI, our far, wide, deep and well connected global web of support 
                industries and resources puts you into immediate access to source and 
                incorporate that odd screw, bolt or material that is critical in making 
                your product stands out from the crowd.
              </p>
              <p>
                At CMI will do all possible to get your orders fabricated within your 
                specifications, even if it means sourcing for and progressing in of that 
                rare component to complete fabricate your product within the set cost and 
                on the time frame as scheduled.
              </p>
            </div>
            <div className="content-images">
              {sourcingImages.slice(0, 2).map((image, index) => (
                <img key={index} src={image} alt={`Sourcing ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="gallery-grid">
            {sourcingImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Sourcing ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sourcing;
