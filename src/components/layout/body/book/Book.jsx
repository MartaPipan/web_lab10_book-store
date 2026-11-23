import { useParams, Link } from "react-router-dom";
import { booksData } from "../../../../data/books.js";
import { AddToCartButton } from "../../../buttons/AddToCartButton.jsx";
import { useApp } from "../../../../context/AppContext.jsx";
import "./Book.css";

export function Book() {
  const { bookId } = useParams();
  const { handleAddToCart } = useApp();
  const book = booksData.find((item) => String(item.id) === String(bookId));

  if (!book) {
    return (
      <section className="single_book_not_found">
        <div className="container">
          <h2>Book not found</h2>
          <Link to="/" className="single_book_back_link">
            ← Back to book collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="single_book">
      <div className="container">
        <Link to="/" className="single_book_back_link">
          ← Back to all books
        </Link>

        <div className="single_book_card">
          <div className="single_book_image">
            <img src={book.image} alt={book.title} />
          </div>

          <div className="single_book_info">
            <span className="single_book_subtitle">Book Details</span>
            <h1 className="single_book_title">{book.title}</h1>

            {book.author && (
              <p className="single_book_author">
                Author: <span>{book.author}</span>
              </p>
            )}

            <div className="single_book_prices">
              {book.price && <span className="single_book_price_old">{book.price}</span>}
              <span className="single_book_price_new">{book.discounted}</span>
            </div>

            {book.description && (
              <p className="single_book_description">{book.description}</p>
            )}

            <div className="single_book_action">
              <AddToCartButton onClick={() => handleAddToCart(book)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

