import "./ViewMoreButton.css";

export function ViewMoreButton({onClick}) {
  return (
    <button className="view-more-btn" onClick={onClick}>
      VIEW MORE
    </button>
  );
}
