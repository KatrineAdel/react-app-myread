import React from 'react';
import propTypes from 'prop-types';

const BookShelfChanger = (props) => { 
    return(
        <select defaultValue={props.book.shelf? props.book.shelf:"none"} onChange={(event) => props.updateBookShelf(props.book, event.target.value)} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
    )

}

BookShelfChanger.propTypes = {
    book: propTypes.array.isRequired,
    updateBookShelf: propTypes.func.isRequired,
}

export default BookShelfChanger;
