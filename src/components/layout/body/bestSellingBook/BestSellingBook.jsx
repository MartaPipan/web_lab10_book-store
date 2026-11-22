import {ViewMoreButton} from "../../../buttons/ViewMoreButton";
import twoBooks from "../../../../assets/images/two-new-books-wrappers-4.jpg";
import "./BestSellingBook.css";

export function BestSellingBook() {
  return (
    <section className="best-selling">
      <div className="content">
        <span className="subtitle">Over 4000 Amazon Reviews</span>
        <h1 className="title">Best selling book</h1>
        <p className="description">Our bookstore is a welcoming space for readers, writers, and curious minds.</p>

        <ViewMoreButton onClick={() => console.log("View more")} />
      </div>

      <div className="image-box">
        <img src={twoBooks} alt="books" />
      </div>
    </section>
  );
}
