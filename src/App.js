import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BookItem from "./components/bookshelf/BookItem";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  changeShelf(shelf) {
    console.log("Changed shelf to: " + shelf);
  }

  render() {
    return (
      <div className="app">
        <BookItem
            book={{title: "foo", authors: ["bar"], imageLinks: {thumbnail: "http://placekitten.com/50/50"}}}
            changeShelf={this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
