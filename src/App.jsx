import {useState, useEffect} from "react";
import {Header} from "./components/header/Header.jsx";
import {BestSellingBook} from "./components/layout/body/bestSellingBook/BestSellingBook.jsx";
import {BookCollection} from "./components/layout/body/bookCollection/BookCollection.jsx";
import {FeaturedHoldStill} from "./components/layout/body/featuredHoldStill/FeaturedHoldStill.jsx";
import {Footer} from "./components/footer/Footer";
import {WindowModal} from "./components/windowModal/WindowModal.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

export function MainComponent() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("bookstore_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("bookstore_cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app">
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <BestSellingBook />
        <BookCollection onAddToCart={handleAddToCart} />
        <FeaturedHoldStill />
      </main>

      <Footer />

      <WindowModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} onRemoveItem={handleRemoveFromCart} />
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/books/:bookId" element={<MainComponent />} />

      </Routes>
    </BrowserRouter>
  );
};
