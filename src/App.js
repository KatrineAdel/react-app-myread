import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

const BooksApp = () => {

  const [books, setBooks] = useState([]);

  const [flip, setFlip] = useState(true);

  const [query, setQuery] = useState("");

  const [searchBooks, setSearchBooks] = useState([]);


  useEffect(() => {
    BooksAPI.getAll()
      .then(book => {
        setBooks(book)
      })
  }, []);

  const updateBookShelf = (book, shelf) => {
    const updateBooks = books.findIndex((b) => b.id === book.id)
    const updateBookList = books

    if (updateBooks === -1) {
      book.shelf = shelf;
      updateBookList.push(book)
    } else {
      updateBookList[updateBooks].shelf = shelf
    }
    setBooks(updateBookList);
    BooksAPI.update(book, shelf);
    setFlip(!flip);
  }

  const updateBookSearch = (query) => {

    BooksAPI.search(query).then((data) => {
      if (data && data.length > 0) {
        for (let q of data) {
          for (let b of books) {
            if (q.id === b.id) {
              const booksIndex = books.findIndex((book) => book.id === q.id)
              q.shelf = books[booksIndex].shelf
              setFlip(!flip);
            }
          }
        }
      }
      setSearchBooks(data);
    })
    setQuery(query);

  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <BookSearch updateBookSearch={updateBookSearch} searchBooks={searchBooks} query={query} book={books} updateBookShelf={updateBookShelf} />
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
