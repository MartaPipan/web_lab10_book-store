import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext.jsx";
import "./WindowModal.css";


function Func ({handleCloseModal}) {
  return (
    <div className="order-success">
              <div className="order-success_icon">✓</div>
              <h4 className="order-success_title">Order placed successfully!</h4>
              <p className="order-success_text">
                Thank you for your purchase. We will contact you shortly with delivery details.
              </p>
              <button className="modal-checkout" onClick={handleCloseModal}>
                CONTINUE SHOPPING
              </button>
            </div>
  )
}
export function WindowModal({ isOpen, onClose, cartItems, onRemoveItem }) {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { setCart } = useApp();

  const handleCloseModal = () => {
    setIsOrderPlaced(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {куегкт 
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.discounted.replace("$", ""));
    return sum + numericPrice;
  }, 0);

  const handleCheckout = () => {
    setIsOrderPlaced(true);
    if (setCart) {
      setCart([]);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{isOrderPlaced ? "Thank You!" : `Your Cart (${cartItems.length})`}</h3>
          <button className="modal-close" onClick={handleCloseModal}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {isOrderPlaced ? (
            <Func handleCloseModal={handleCloseModal} />
          ) : cartItems.length === 0 ? (
            <p className="modal-empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cartItems.map((book, index) => (
                <li key={`${book.id}-${index}`} className="cart-item">
                  <img src={book.image} alt={book.title} className="cart-item_img" />
                  <div className="cart-item_info">
                    <h4>{book.title}</h4>
                    <span>{book.discounted}</span>
                  </div>
                  <button
                    className="cart-item_remove"
                    onClick={() => onRemoveItem(index)}
                    title="Remove book"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isOrderPlaced && cartItems.length > 0 && (
          <div className="modal-footer">
            <div className="modal-total">
              <span>Total:</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <button className="modal-checkout" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
