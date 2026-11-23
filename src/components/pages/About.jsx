import { Link } from "react-router-dom";
import "./ForPages.css";

export function About() {
  return (
    <section className="page_section">
      <span className="page_subtitle">Information</span>
      <h1 className="page_title">About Us</h1>
      <Link to="/" className="page_back_link">← Back to Home</Link>
    </section>
  );
}
