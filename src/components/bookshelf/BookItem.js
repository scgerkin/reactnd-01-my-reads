import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class BookItem extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, onChangeShelf } = this.props;

    return (
        <div className={"book"}>
          <div
              className={"book-cover"}
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
          />
          <BookShelfChanger onChangeShelf={onChangeShelf}/>
          <div className={"book-title"}>{book.title}</div>
          <div className={"book-authors"}>{book.authors[0]}</div>
        </div>
    )
  }
}

export default BookItem;
