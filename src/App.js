import React from 'react'
import {Route} from "react-router-dom";
import './App.css'
import * as BooksAPI from "./utils/BooksAPI";
import ListBooks from "./components/bookshelf/ListBooks";
import SearchBooks from "./components/search/SearchBooks";

const shelves = [
    "currentlyReading",
    "wantToRead",
    "read",
    "none"
];

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
      this.setState(() => ({
        shelves
      }))
    });
  }

  changeShelf = (bookToChange, newShelfValue) => {
    BooksAPI.update(bookToChange, newShelfValue)
        .then(() => {
          const originalBook = this.state.books.find(book => book.id === bookToChange.id);
          if (!!originalBook) {
            this.setState(this.state.books.map(book => {
              if (book.id === originalBook.id) {
                book.shelf = newShelfValue;
              }
              return book;
            }));
          }
          else {
            bookToChange.shelf = newShelfValue;
            this.setState((currentState) => ({
              books: currentState.books.concat([bookToChange])
            }));
          }
        }).catch(error => console.log(error));
  }

  render() {
    const {books} = this.state;
    return (
        <div className="app">
          <Route exact path={"/"} render={() => (
              <ListBooks
                  books={books}
                  changeShelf={this.changeShelf}
                  shelfOptions={shelves}
              />
          )}/>
          <Route path={"/search"} render={({history}) => (
              <SearchBooks
                  closeSearch={() => history.push("/")}
                  addToShelf={this.changeShelf}
                  shelfOptions={shelves}
                  currentlyTrackedBooks={books}
              />
          )}/>
        </div>
    )
  }
}

export default BooksApp
