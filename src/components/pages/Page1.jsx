import { Link } from "react-router-dom";
import "./ForPages.css";

export function Page1() {
  return (
    <section className="page_section">
      <span className="page_subtitle">Section</span>
      <h1 className="page_title">Page 1</h1>
      <Link to="/" className="page_back_link">← Back to Home</Link>
    </section>
  );
}
