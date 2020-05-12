import React from 'react'
import './App.css'
import * as BooksAPI from "./utils/BooksAPI";
import ListBooks from "./components/bookshelf/ListBooks";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
      const shelves = [...new Set(this.state.books.map(book => book.shelf))];
      shelves.push("none");
      this.setState(() => ({
        shelves
      }))
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
              changeShelf={this.changeShelf}
              shelfOptions={this.state.shelves}
          />
        </div>
    )
  }
}

export default BooksApp
