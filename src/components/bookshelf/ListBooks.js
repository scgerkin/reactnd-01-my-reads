import React from "react";
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
        <div className={"list-books"}>
          <div className={"list-books-title"}>
            <h1>MyReads</h1>
          </div>
          <div className={"list-books-content"}>
            <BookShelf
                shelfName={"Currently Reading"}
                books={this.props.books}
                changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
    )
  }
}

export default ListBooks;
