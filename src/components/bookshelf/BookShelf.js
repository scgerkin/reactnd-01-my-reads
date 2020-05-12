import React from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

class BookShelf extends React.Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  render() {
    const {shelfName, books, changeShelf} = this.props;
    return (
        <div className={"bookshelf"}>
          <h2 className={"bookshelf-title"}>{shelfName}</h2>
          <div className={"bookshelf-books"}>
            <ol className={"books-grid"}>
              {books.map(book =>(
                <li key={book.id}>
                  <BookItem book={book} changeShelf={changeShelf}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default BookShelf;
