import { Link } from "react-router-dom";
import "./ForPages.css";

export function Store() {
  return (
    <section className="page_section">
      <span className="page_subtitle">Bookshop</span>
      <h1 className="page_title">Store</h1>
      <Link to="/" className="page_back_link">← Back to Home</Link>
    </section>
  );
}
