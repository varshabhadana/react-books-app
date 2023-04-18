import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const createBook = (title) => {
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 9999) + 1, title: title },
    ]);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} onDelete={deleteBookById} />

      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
