import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

// TODO: Handle multiple authors
class BookItem extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired
  }

  getShelf(book) {
    if (!book.shelf) {
      book.shelf = "none";
    }
    return book.shelf;
  }

  render() {
    const {book, changeShelf, shelfOptions} = this.props;

    return (
        <div className={"book"}>
          <div className={"book-top"}>
            <div
                className={"book-cover"}
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}
            />
            <BookShelfChanger
                onChangeShelf={(newShelf)=> changeShelf(book, newShelf)}
                shelfOptions={shelfOptions}
                currentShelf={this.getShelf(book)}
            />
          </div>
          <div className={"book-title"}>{book.title}</div>
          <div className={"book-authors"}>{book.authors && book.authors[0]}</div>
        </div>
    )
  }
}

export default BookItem;
