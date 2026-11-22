import book7 from "../../../../assets/images/book-7.png";
import book8 from "../../../../assets/images/book-8.png";
import "./FeaturedHoldStill.css";

export function FeaturedHoldStill() {
  return (
    <div className="featured-sections">
      <section className="featured container">
        <div className="featured_text">
          <h2 className="featured_title">
            Featured Books for <br /> Thoughtful Living
          </h2>
          <p className="featured_description">Discover a carefully selected collection of inspiring books about personal growth, creativity, nature, and the quiet moments that shape everyday life. Each title combines thoughtful writing with elegant botanical design, making these books meaningful reads and beautiful additions to any home library.</p>
          <div className="featured_book_info">
            <span className="featured_book_name">The Quiet Season</span>
            <span className="featured_book_author">By Maya Ellison</span>
          </div>
        </div>

        <div className="featured_image">
          <img src={book7} alt="Simple Grace" />
        </div>
      </section>
      <section className="featured featured--reverse container">
        <div className="featured_text">
          <h2 className="featured_title">Hold Still</h2>
          <p className="featured_subtitle">By Jonah Reeves</p>
          <p className="featured_description">Through short essays and personal observations, Hold Still invites readers to pause, breathe, and become more present. This thoughtful collection is ideal for anyone looking for calm, clarity, and a more intentional approach to daily life.</p>
          <div className="featured_meta">
            <p>
              <strong>Genre:</strong> Essays & Reflections
            </p>
            <p>
              <strong>Price:</strong> $26.00
            </p>
          </div>
        </div>

        <div className="featured_image">
          <img src={book8} alt="Hold Still" />
        </div>
      </section>
    </div>
  );
}
