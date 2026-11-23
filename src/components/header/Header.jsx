import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import shopCart from "../../assets/images/shopping-cart.png";
import "./Header.css";

export function Header({ cartCount = 0, onOpenCart }) {
  return (
    <header className="header">
      <div className="container header_navigation">
        <Link to="/" className="header_logo">
          <img src={logoImg} alt="Book Store Logo" />
        </Link>

        <nav className="header_nav">
          <Link to="/" className="header_link">
            HOME
          </Link>
          <Link to="/about" className="header_link">
            ABOUT
          </Link>
          <Link to="/contact" className="header_link">
            CONTACT
          </Link>
          <Link to="/page1" className="header_link">
            PAGE1
          </Link>
          <Link to="/page2" className="header_link">
            PAGE2
          </Link>
          <Link to="/store" className="header_link">
            STORE
          </Link>
        </nav>

        <div className="header_cart" onClick={onOpenCart}>
          <img src={shopCart} alt="shopping-cart" />
          <span className="header_cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}
