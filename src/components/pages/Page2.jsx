import { Link } from "react-router-dom";
import "./ForPages.css";

export function Page2() {
  return (
    <section className="page_section">
      <span className="page_subtitle">Section</span>
      <h1 className="page_title">Page 2</h1>
      <Link to="/" className="page_back_link">← Back to Home</Link>
    </section>
  );
}
