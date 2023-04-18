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

  const createBook = (title) => {
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 9999) + 1, title: title },
    ]);
  };
  return (
    <div className="app">
      <BookCreate onCreate={createBook} onDelete={deleteBookById} />

      <BookList books={books} onDelete={deleteBookById} />
    </div>
  );
}

export default App;
