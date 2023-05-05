import React, { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(true);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
