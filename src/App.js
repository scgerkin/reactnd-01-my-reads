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

  changeShelf = (bookIdToChange, newShelfValue) => {
    BooksAPI.update(bookIdToChange, newShelfValue)
        .then(() => {
          this.setState(this.state.books.map(book => {
            if (book.id === bookIdToChange) {
              book.shelf = newShelfValue;
            }
            return book;
          }));
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
