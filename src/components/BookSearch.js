import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

const BookSearch = ({ combinedBooks, updateBookShelf, setQuery, query}) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => setQuery(event.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        combinedBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} updateBookShelf={updateBookShelf}/>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookSearch;