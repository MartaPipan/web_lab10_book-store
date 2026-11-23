import "./WindowModal.css";

export function WindowModal({isOpen, onClose, cartItems, onRemoveItem}) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.discounted.replace("$", ""));
    return sum + numericPrice;
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Your Cart ({cartItems.length})</h3>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {cartItems.length === 0 ? (
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
                  <button className="cart-item_remove" onClick={() => onRemoveItem(index)} title="Remove book">
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="modal-footer">
            <div className="modal-total">
              <span>Total:</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <button className="modal-checkout" onClick={() => alert(`Order placed! Total: $${totalPrice.toFixed(2)}`)}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
