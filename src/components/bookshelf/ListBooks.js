import React from "react";
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const {books, changeShelf} = this.props;
    return (
        <div className={"list-books"}>
          <div className={"list-books-title"}>
            <h1>MyReads</h1>
          </div>
          <div className={"list-books-content"}>
            <BookShelf
                shelfName={"Currently Reading"}
                key={"currentlyReading"}
                books={books.filter(book => book.shelf === "currentlyReading")}
                changeShelf={changeShelf}
            />
            <BookShelf
                shelfName={"Read"}
                key={"read"}
                books={books.filter(book=> book.shelf === "read")}
                changeShelf={changeShelf}
            />
          </div>
        </div>
    )
  }
}

export default ListBooks;
