import { createContext, useContext, useState, useEffect } from "react";

// AppContext винесена сюди вся логіка
const AppContext = createContext();

export function AppProvider({ children }) {
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
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));  //Нижнє підкреслення _ означає, що сам об'єкт книжки нам зараз не потрібен — ми дивимося лише на її порядковий номер index.
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
