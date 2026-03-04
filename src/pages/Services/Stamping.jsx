const serviceImages = [
  'http://chosenmetalind.com/data/96/uploads/2file__05919172951.gif',
  'http://chosenmetalind.com/data/96/uploads/3file__05527133113.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__05919222448.gif'
];

function Stamping() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Stamping</h1>
            <p>Precision Metal Stamping Services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Metal Stamping Excellence</h2>
              <p>
                Metal Stampers are ubiquitous but what makes us stand out from the crowd 
                is our ability to not just effectively replicate on form, but also in 
                discerning the right substance for the form.
              </p>
              <p>
                In this 21st Century business environment of cut throat competition, 
                finding the right supply chain support partners can make or break your 
                competitiveness.
              </p>
              <p>
                Using a diverse range of machines: mechanical, pneumatic, hydro pneumatic 
                and hydraulic presses from 10 to 100tons, we literally stamp ideas into 
                realities.
              </p>
            </div>
            <div className="content-images">
              {serviceImages.map((image, index) => (
                <img key={index} src={image} alt={`Stamping ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stamping;
