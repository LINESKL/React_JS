import './App.css'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import BookListEx from './pages/BookList'
import BookFormEx from './pages/BookForm'
import Found from './pages/PageNotFound'
import React, { useState, useEffect, useCallback } from 'react'

function Header() {
  return (
    <nav style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <h1>Welcome to the Book Management App</h1>
      <p>Use the navigation links to view the book list or add a new book.</p>
      <div>
        <Link to="/books" style={{ marginRight: '10px' }}>Book List</Link> |
        <Link to="/add-book" style={{ marginLeft: '10px' }}>Add Book</Link>
      </div>
    </nav>
  )
}

function App() {
  const navigate = useNavigate();
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books]);

  const addBook = useCallback((bookData) => {
    const newBook = {
        id: Date.now(), 
        rating: parseFloat(bookData.rating), 
        ...bookData
    };
    setBooks(prevBooks => [...prevBooks, newBook]);
  }, []);

  const deleteBook = useCallback(id => {
    setBooks(prev => prev.filter(book => book.id !== id));
  }, []);

  const handleAddSubmit = (values, actions) => {
    addBook(values);
    actions.resetForm();
    actions.setSubmitting(false);
    navigate('/books'); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <Routes>
        <Route 
          path="/books" 
          element={<BookListEx books={books} deleteBook={deleteBook} />} 
        />
        <Route 
          path="/add-book" 
          element={<BookFormEx onSubmit={handleAddSubmit} />} 
        />
        <Route path="/" element={<BookListEx books={books} deleteBook={deleteBook} />} />
        <Route path="*" element={<Found />} />
      </Routes>
    </div>
  )
}

export default App;