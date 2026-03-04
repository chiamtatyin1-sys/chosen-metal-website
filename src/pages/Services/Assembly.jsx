const assemblyImages = [
  'http://chosenmetalind.com/data/96/uploads/2file__05919173619.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__05919173619.jpg',
  'http://chosenmetalind.com/data/96/uploads/1file__05610175505.jpg'
];

function Assembly() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Assembly</h1>
            <p>Professional Assembly Services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Expert Assembly Solutions</h2>
              <p>
                There are diverse ways to put together complementary parts into the desired 
                final product, but cost effective assembling requires the need to design 
                and process engineer complementary parts prior to, and post assembly.
              </p>
              <p>
                At CMI, we just don't anyhow put parts together; we do it consciously as 
                a part of the whole marketing-production process by judiciously maximizing 
                productivity and minimizing waste.
              </p>
            </div>
            <div className="content-images">
              {assemblyImages.map((image, index) => (
                <img key={index} src={image} alt={`Assembly ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Assembly;
