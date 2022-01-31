import React from 'react';
import Book from './Book';
import propTypes from 'prop-types';

const BookShelf = (props) => {

    const bookCategory = props.books.filter((book) => book.shelf === props.category);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">{
                    bookCategory.map((b) => (
                        <li key={b.id}>
                            <Book book={b} updateBookShelf={props.updateBookShelf}/>
                        </li>
                    ))
                }
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    books: propTypes.object.isRequired,
    title: propTypes.array.isRequired,
    updateBookShelf: propTypes.func.isRequired,
    category: propTypes.array.isRequired,
}

export default BookShelf;