import {useState} from "react";
import {Header} from "./components/header/Header.jsx";
import {BestSellingBook} from "./components/layout/body/bestSellingBook/BestSellingBook.jsx";
import {BookCollection} from "./components/layout/body/bookCollection/BookCollection.jsx";
import {FeaturedHoldStill} from "./components/layout/body/featuredHoldStill/FeaturedHoldStill.jsx";
import {Footer} from "./components/footer/Footer";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  return (
    <div className="app">
      <Header cartCount={cart.length} />

      <main>
        <BestSellingBook />
        <BookCollection onAddToCart={handleAddToCart} />
        <FeaturedHoldStill />
      </main>

      <Footer />
    </div>
  );
}
