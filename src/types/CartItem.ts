import Book from "./Book";

interface CartItem extends Book {
  quantity: number;
}

export default CartItem;
