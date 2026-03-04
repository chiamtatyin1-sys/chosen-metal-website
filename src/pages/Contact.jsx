import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    enquiryType: 'Enquiry',
    name: '',
    company: '',
    contact: '',
    fax: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Contact Us</h1>
            <p>Get in Touch with CMI</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    No.34, Jalan Masyhur 5,<br />
                    Taman Perindustrian Cemerlang,<br />
                    81800 Ulu Tiram,<br />
                    Johor, Malaysia.
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>607-861 8972</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📠</div>
                <div className="contact-details">
                  <h4>Fax</h4>
                  <p>607-861 6200</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>enquiry@chosenmetalind.com</p>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.447761383717!2d103.8134683147538!3d1.562610998868197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7d9b4a1b7e89%3A0x8a7b8e7a7a7e7a7e!2sChosen%20Metal%20Industries%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>

            <div className="contact-form">
              <h2 style={{ marginBottom: '20px', color: '#1a365d' }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Enquiry Type</label>
                  <select 
                    name="enquiryType" 
                    value={formData.enquiryType} 
                    onChange={handleChange}
                  >
                    <option value="Enquiry">Enquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complain">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Contact No. *</label>
                  <input 
                    type="text" 
                    name="contact" 
                    value={formData.contact} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Fax</label>
                  <input 
                    type="text" 
                    name="fax" 
                    value={formData.fax} 
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <textarea 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
