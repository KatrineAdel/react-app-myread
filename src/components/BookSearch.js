import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


const BookSearch = (props) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={props.query} onChange={(event) => props.updateBookSearch(event.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        props.searchBooks && props.searchBooks.length > 0 && props.searchBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} updateBookShelf={props.updateBookShelf} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

BookSearch.propTypes = {
    book: propTypes.array.isRequired,
    query: propTypes.string.isRequired,
    searchBooks: propTypes.array.isRequired,
    updateBookSearch: propTypes.func.isRequired,
    updateBookShelf: propTypes.func.isRequired,
}

export default BookSearch;