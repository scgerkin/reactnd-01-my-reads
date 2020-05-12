import React from 'react'
import './App.css'
import * as BooksAPI from "./utils/BooksAPI";
import ListBooks from "./components/bookshelf/ListBooks";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    });
  }

  changeShelf = (bookIdToChange, newShelfValue) => {
    this.setState(this.state.books.map(book => {
      if (book.id === bookIdToChange) {
        book.shelf = newShelfValue;
      }
      return book;
    }));
  }

  render() {
    return (
        <div className="app">
          <ListBooks
              books={this.state.books}
              changeShelf={this.changeShelf}/>
        </div>
    )
  }
}

export default BooksApp
