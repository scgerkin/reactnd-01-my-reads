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
      }))
    })
  }

  changeShelf(shelf) {
    console.log("Changed shelf to: " + shelf);
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
