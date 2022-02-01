import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

const BooksApp = () => {

  const [books, setBooks] = useState([]);

  let [flip, setFlip] = useState(true);

  const [query, setQuery] = useState("");

  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(book => {
        setBooks(book)
      })
  }, []);


  const updateBookShelf = (book, shelf) => {
    const updateBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    })
    if (!updateBooks.concat(book.id)) {
      book.shelf = shelf;
      updateBooks.push(book)
    }
    setBooks(updateBooks);
    BooksAPI.update(book, shelf);
    setFlip(!flip);
  }

  useEffect(() => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setSearchBooks([]);
        }
        else {
          if (data) {
            for (let q of data) {
              for (let b of books) {
                if (b.id === q.id) {
                  const booksIndex = books.findIndex((book) => book.id === q.id)
                  q.shelf = books[booksIndex].shelf
                }
              }
            }
            setSearchBooks(data);
            setFlip(!flip);
          }
        }
      })
    }
  }, [query])

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <BookSearch setQuery={setQuery} searchBooks={searchBooks} query={query} book={books} updateBookShelf={updateBookShelf} />
          </Route>
          <Route path="/">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" books={books} category={"currentlyReading"} updateBookShelf={updateBookShelf} />
                  <BookShelf title="Want To Read" books={books} category={"wantToRead"} updateBookShelf={updateBookShelf} />
                  <BookShelf title="Read" books={books} category={"read"} updateBookShelf={updateBookShelf} />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default BooksApp
