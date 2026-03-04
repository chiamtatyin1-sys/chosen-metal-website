const aluminiumImages = [
  '/images/uploads/1file__05919221430.gif',
  '/images/uploads/1file__05919222044.jpg',
  '/images/uploads/1file__05527133157.jpg'
];

function Aluminium() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Aluminium</h1>
            <p>Aluminium Fabrication & Processing</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Aluminium Excellence</h2>
              <p>
                Aluminum is lightweight, corrosion resistant, UV stable, pliable and versatile, 
                an ideal metal stamping and fabrication material.
              </p>
              <p>
                At CMI, we transform ordinary aluminum material into great works of craft 
                be it by value adding on aluminum alone or combining it with other materials 
                like glass, polymers, fabric and wood etc.
              </p>
              <p>
                Among the many state of the art machines we employ to craft great products 
                are high end three dimensional cutters: digitally controlled cutters that 
                cut not in just ordinary 2, but 3 different separate plane angles with 
                accuracy up to 0.2mm.
              </p>
              <p>
                Routing processors etc.
              </p>
            </div>
            <div className="content-images">
              {aluminiumImages.map((image, index) => (
                <img key={index} src={image} alt={`Aluminium ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aluminium;
