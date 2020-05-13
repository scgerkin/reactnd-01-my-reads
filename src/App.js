import React from 'react'
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

  // FIXME This is a MESS
  //  Going to need to figure out a better way to handle this.
  //  This is updating the backend with the new value (fine)
  //  Then updating the current books array with a new shelf value for the book
  //  if the book is already in the shelf
  //  If it's not in the shelf, it updates the bookToChange to newShelfValue
  //  and concats it to the book array.
  //  This is way too convoluted.
  changeShelf = (bookToChange, newShelfValue) => {
    //debugger;
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
            console.log("Book to change");
            console.log(bookToChange);
            this.setState((currentState) => ({
              books: currentState.books.concat([bookToChange])
            }));
            console.log("Set state, concat new book, books size:");
            console.log(this.state.books);
          }
        }).catch(error => console.log(error));
  }

  render() {
    const {books, showSearchPage} = this.state;
    return (
        <div className="app">
          {showSearchPage ? (
              <SearchBooks
                  closeSearch={() => this.setState({showSearchPage: false})}
                  addToShelf={this.changeShelf}
                  shelfOptions={shelves}
                  currentlyTrackedBooks={books}
              />
          ) : (
              <div>
                <ListBooks
                    books={books}
                    changeShelf={this.changeShelf}
                    shelfOptions={shelves}
                />
                <div className={"open-search"}>
                  <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                </div>
              </div>
          )}
        </div>
    )
  }
}

export default BooksApp
