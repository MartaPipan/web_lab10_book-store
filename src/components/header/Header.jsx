import logoImg from "../../assets/images/logo.png";
import shopCart from "../../assets/images/shopping-cart.png";
import "./Header.css";

export function Header({cartCount = 0, onOpenCart }) {
  return (
    <header className="header">
      <div className="container header_navigation">
        <a href="#" className="header_logo">
          <img src={logoImg} alt="Book Store Logo" />
        </a>

        <nav className="header_nav">
          <a href="#" className="header_link">
            HOME
          </a>
          <a href="#" className="header_link">
            ABOUT
          </a>
          <a href="#footer" className="header_link">
            CONTACT
          </a>
          <a href="#" className="header_link">
            PAGE1
          </a>
          <a href="#" className="header_link">
            PAGE2
          </a>
          <a href="#" className="header_link">
            STORE
          </a>
        </nav>

        <div className="header_cart" onClick={onOpenCart}>
          <img src={shopCart} alt="shopping-cart" />
          <span className="header_cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}
