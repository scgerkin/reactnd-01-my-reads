import React from "react";
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.string.isRequired
  }

  camelToSentence(str) {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  render() {
    const {books, changeShelf, shelfOptions} = this.props;

    return (
        <div className={"list-books"}>
          <div className={"list-books-title"}>
            <h1>MyReads</h1>
          </div>
          <div className={"list-books-content"}>
            {shelfOptions.filter(shelf => shelf !== "none").map(shelf => (
                <BookShelf
                    key={shelf}
                    shelfName={this.camelToSentence(shelf)}
                    books={books.filter(book => book.shelf === shelf)}
                    changeShelf={changeShelf}
                    shelfOptions={shelfOptions}
                />
            ))}
          </div>
        </div>
    )
  }
}

export default ListBooks;
