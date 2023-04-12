import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';
import BookList from './components/BookList';
import BookShow from './components/BookShow';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 9999) + 1, title: title },
    ]);
    console.log('click', title);
  };
  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
      <BookEdit />
      <BookList />
      <BookShow />
    </div>
  );
}

export default App;
