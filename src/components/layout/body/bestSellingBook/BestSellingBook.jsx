// import { Button } from '../../buttons/Button';
import twoBooks from '../../../../assets/images/two-new-books-wrappers-4.jpg';
import './BestSellingBook.css';

export function BestSellingBook() {
  return (
    <section className="best-selling">
      <div className="content">
        <span className="subtitle">Over 4000 Amazon Reviews</span>
        <h1 className="title">Best selling book</h1>
        <p className="description">
          Our bookstore is a welcoming space for readers, writers, and curious minds.
        </p>

        {/* <Button variant="primary" onClick={() => console.log('View more')}>
          VIEW MORE
        </Button> */}
      </div>

      <div className="image-box">
        <img src={twoBooks} alt="books" />
      </div>
    </section>
  );
}
