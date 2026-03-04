const warehousingImages = [
  '/images/uploads/1file__05915172345.jpg',
  '/images/uploads/1file__06324162135.jpg',
  '/images/uploads/nre.jpg'
];

function Warehousing() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Warehousing</h1>
            <p>Professional Warehousing & Logistics Services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Integrated Warehousing Solutions</h2>
              <p>
                In line with our Vision and Mission in providing that critical impeccable 
                One-Stop-Shop supply chain support to our customers, we even provide systems 
                supported warehousing and logistics services to our valued customers.
              </p>
              <p>
                Our OEM customers enjoy the hassle free provision of the required right parts 
                and components from our warehouse at the right quantity, right time and right place.
              </p>
              <p>
                At CMI, Just In Time (JIT) is our culture, for every space has its place.
              </p>
            </div>
            <div className="content-images">
              {warehousingImages.map((image, index) => (
                <img key={index} src={image} alt={`Warehousing ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Warehousing;
