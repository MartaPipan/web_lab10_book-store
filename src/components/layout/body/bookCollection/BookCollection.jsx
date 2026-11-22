// import { Button } from '../../../buttons/Button';
import { booksData } from '../../../../data/books.js';
import './BookCollection.css';

export function BookCollection({ onAddToCart }) {
  return (
    <section className="collection">
      <div className="container">
        <span className="collection_subtitle">Book Collection</span>
        <h2 className="collection_title">My Books</h2>

        <div className="collection_grid">
          {booksData.map((book) => (
            <article key={book.id} className="book_card">
              <div className="book_card_image">
                <img src={book.image} alt={book.title} />
              </div>
              
              <h3 className="book_card_title">{book.title}</h3>
              
              <div className="book_card_prices">
                <span className="price_old">{book.price}</span>
                <span className="price_new">{book.discounted}</span>
              </div>

                {/*<Button variant="secondary" onClick={() => onAddToCart(book)}>
                ADD TO CART
              </Button>   */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
