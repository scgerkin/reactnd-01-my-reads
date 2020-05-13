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

  //fixme this doesn't update the current list without a browser refresh
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
            this.setState((currentState) => ({
              books: currentState.books.push(bookToChange)
            }));
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
