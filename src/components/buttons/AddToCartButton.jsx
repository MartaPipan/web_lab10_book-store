import "./AddToCartButton.css";

export function AddToCartButton({onClick}) {
  return (
    <button className="add-to-cart-btn" onClick={onClick}>
      ADD TO CART
    </button>
  );
}
