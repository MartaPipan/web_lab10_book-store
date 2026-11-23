import {Link} from "react-router-dom";
import {BookCollection} from "../layout/body/bookCollection/BookCollection.jsx";
import {useApp} from "../../context/AppContext.jsx";
import "./ForPages.css";

export function Store() {
  const {handleAddToCart} = useApp();

  return (
    <section className="page_section">
      <span className="page_subtitle">Bookshop</span>
      <h1 className="page_title">Store</h1>
      <Link to="/" className="page_back_link">
        ← Back to Home
      </Link>
      
      <div className="store_page">
        <BookCollection onAddToCart={handleAddToCart} />
      </div>
    </section>
  );
}
