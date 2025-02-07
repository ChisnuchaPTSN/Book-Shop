import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import { books } from "./data/BookMockUp";
import Book from "./types/Book";
import CartItem from "./types/CartItem";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    const existingItem = cartItems.find((item) => item.id === book.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity >= 1 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header showCart={showCart} setShowCart={setShowCart} pageName={""} />

      <main className="flex-grow container mx-auto px-4 py-6">
        {showCart && (
          <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            totalPrice={totalPrice}
          />
        )}

        <BookList books={books} addToCart={addToCart} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
