import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import propTypes from 'prop-types';

const Book = (props) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(props.book && props.book.imageLinks && props.book.imageLinks.smallThumbnail) ? props.book.imageLinks.smallThumbnail : `../public/book.png`} )` }}></div>
                <div className="book-shelf-changer">
                    <BookShelfChanger book={props.book} updateBookShelf={props.updateBookShelf} />
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    )
}

Book.propTypes = {
    book: propTypes.object.isRequired,
    updateBookShelf: propTypes.func.isRequired,
}

export default Book;