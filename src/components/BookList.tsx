import Book from "../types/Book";
import BookDetail from "./BookDetail";

interface BookListProps {
  books: Book[];
  addToCart: (book: Book) => void;
}

function BookList({ books, addToCart }: BookListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">รายการหนังสือ</h1>
      <div className="flex flex-wrap justify-center items-start">
        {books.map((book) => (
          <BookDetail key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
