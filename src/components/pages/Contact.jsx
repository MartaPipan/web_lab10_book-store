import { Link } from "react-router-dom";
import "./ForPages.css";

export function Contact() {
  return (
    <section className="page_section">
      <span className="page_subtitle">Get in touch</span>
      <h1 className="page_title">Contact</h1>
      <Link to="/" className="page_back_link">← Back to Home</Link>
    </section>
  );
}