import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from "./components/bookshelf/ListBooks";

const fooBooks = [
  {
    id: 1,
    title: "foo",
    authors: ["bar"],
    imageLinks: {thumbnail: "http://placekitten.com/50/50"},
    shelf: "currentlyReading"
  },
  {
    id: 2,
    title: "baz",
    authors: ["weeble"],
    imageLinks: {thumbnail: "http://placekitten.com/50/50"},
    shelf: "currentlyReading"
  },
  {
    id: 3,
    title: "bum",
    authors: ["bax"],
    imageLinks: {thumbnail: "http://placekitten.com/50/50"},
    shelf: "read"
  }
]

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
          <ListBooks
              books={fooBooks}
              changeShelf={this.changeShelf}/>
        </div>
    )
  }
}

export default BooksApp

//{{title: "foo", authors: ["bar"], imageLinks: {thumbnail: "http://placekitten.com/50/50"}}
