const toolingImages = [
  'http://chosenmetalind.com/data/96/uploads/3file__06324162135.jpg',
  'http://chosenmetalind.com/data/96/uploads/2file__06324162145.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__06324162740.jpg'
];

function Tooling() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Tooling</h1>
            <p>Custom Tool Design & Manufacturing</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Custom Tooling Solutions</h2>
              <p>
                Can't find the right tool for the right job?
              </p>
              <p>
                Let us help you find the right one, and if there is none in the market, 
                let us help you design and make the right tool for you, so as to empower 
                you to get the job done in the right way.
              </p>
            </div>
            <div className="content-images">
              {toolingImages.map((image, index) => (
                <img key={index} src={image} alt={`Tooling ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tooling;
