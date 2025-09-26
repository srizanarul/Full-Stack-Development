import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleAddBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle('');
      setNewAuthor('');
    }
  };

  const handleRemoveBook = (indexToRemove) => {
    const updatedBooks = books.filter((_, index) => index !== indexToRemove);
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="add-book-form">
        <input
          type="text"
          placeholder="New Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Book Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <ul className="book-list">
        {filteredBooks.map((book, index) => (
          <li key={index} className="book-item">
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button onClick={() => handleRemoveBook(index)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
