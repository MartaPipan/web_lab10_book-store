import { Link } from "react-router-dom";
import "./ForPages.css";

export function Contact() {
  return (
    <section className="page_section">
      <span className="page_subtitle">Get in touch</span>
      <h1 className="page_title">Contact</h1>
      <Link to="/" className="page_back_link">← Back to Home</Link>
      
      <div className="footer_grid">
        <div className="footer_col">
          <h4>Address</h4>
          <span>Leaf & Letter Books</span>
          <span>148 Willow Street</span>
          <span>Portland, OR 97205</span>
        </div>
        
        <div className="footer_col">
          <h4>Opening Hours</h4>
          <span>Monday-Friday: 9:00 AM-7:00 PM</span>
          <span>Saturday: 10:00 AM-6:00 PM</span>
          <span>Sunday: 11:00 AM-5:00 PM</span>
        </div>
        
        <div className="footer_col">
          <h4>Contact</h4>
          <span>Phone: +1 503 555 0148</span>
          <span>Email: hello@leafandletterbooks.com</span>
        </div>
        
        <div className="footer_col">
          <h4>Send Us a Message</h4>
          <span>
            Looking for a particular title, planning a <br /> 
            book-club order, or interested in an <br />
            upcoming event?
          </span>
        </div>
      </div>
    </section>
  );
}
