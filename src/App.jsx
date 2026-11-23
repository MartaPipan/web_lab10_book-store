import { Header } from "./components/header/Header.jsx";
import { BestSellingBook } from "./components/layout/body/bestSellingBook/BestSellingBook.jsx";
import { BookCollection } from "./components/layout/body/bookCollection/BookCollection.jsx";
import { FeaturedHoldStill } from "./components/layout/body/featuredHoldStill/FeaturedHoldStill.jsx";
import { Footer } from "./components/footer/Footer";
import { WindowModal } from "./components/windowModal/WindowModal.jsx";
import { Book } from "./components/layout/body/book/Book.jsx";
import { AppProvider, useApp } from "./context/AppContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export function MainComponent() {
  const { handleAddToCart } = useApp();

  return (
    <>
      <BestSellingBook />
      <BookCollection onAddToCart={handleAddToCart} />
      <FeaturedHoldStill />
    </>
  );
}

function AppLayout() {
  const { cart, isCartOpen, setIsCartOpen, handleRemoveFromCart } = useApp();

  return (
    <div className="app">
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/books/:bookId" element={<Book />} />
        </Routes>
      </main>

      <Footer />

      <WindowModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppProvider>
  );
}
