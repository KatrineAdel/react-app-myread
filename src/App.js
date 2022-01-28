import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

const BooksApp = () => {

  const [books, setBooks] = useState([]);

  const [query, setQuery] = useState("");

  const [searchBooks, setSearchBooks] = useState([]);

  const [combinedBooks, setCombinedBooks] = useState([]);

  const [booksMap, setBooksMap] = useState([new Map()]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
        setBooksMap(createMapOfBooks(data))
      });
  }, [])

  useEffect(() => {
    const comined = searchBooks.map(book => {
      if (booksMap.has(book.id)) {
        return booksMap.get(book.id);
      } else {
        return book;
      }
    })
    setCombinedBooks(comined);
  }, [searchBooks])

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }

  useEffect(() => {
    let isActive = true;
    if (query) {
      BooksAPI.search(query).then(data => {
        if (data.error) {
          setSearchBooks([])
        }
        else {
          if (isActive) {
            setSearchBooks(data);
          }
        }
      })
    }
    return () => {
      isActive = false;
      setSearchBooks([]);
    }
  }, [query])

  const updateBookShelf = (book, shelf) => {
    const updateBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    })
    if (!booksMap.has(book.id)) {
      book.shelf = shelf;
      updateBooks.push(book)
    }
    setBooks(updateBooks);
    BooksAPI.update(book, shelf);
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <BookSearch combinedBooks={combinedBooks} book={books} updateBookShelf={updateBookShelf} query={query} setQuery={setQuery} />
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
