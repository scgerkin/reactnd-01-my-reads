import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import * as BooksAPI from "./../../utils/BooksAPI"
import * as debounce from "lodash/debounce";

class SearchBooks extends React.Component {
  static propTypes = {
    closeSearch: PropTypes.func.isRequired,
    addToShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired
  }

  state = {
    query: "",
    searchResults: []
  }

  onUpdateQuery = (event) => {
    event.persist();
    this.setState(() => ({
      query: event.target.value
    }));
    if (!this.debouncedFn) {
      this.debouncedFn = debounce(() => {
        const searchString = event.target.value;
        this.getBooks(searchString).then((results) => {
          // TODO: handle to results or just 1 result
          //  The backend is returning an object instead of an empty list
          //  when no results but still gives a status 200.
          this.setState(() => ({searchResults: results}))
        });
      }, 600);
    }
    this.debouncedFn();
  }

  getBooks = (value) => BooksAPI.search(value);



  //getBooksThrottled = throttle(this.getBooks, 300);

  // async performSearch(query) {
  //   console.log(query);
  //   console.log(localStorage.token);
  //   await new Promise(r => setTimeout(r, 300))
  //       .then(() => BooksAPI.search(query)
  //           .then((results) => {
  //             this.setState(() => ({results}))
  //           }));
  // }

  render() {
    const {closeSearch, addToShelf, shelfOptions} = this.props;
    const {searchResults} = this.state;
    return (
        <div className={"search-books"}>
          <SearchBar
              closeSearch={closeSearch}
              query={this.state.query}
              updateQuery={this.onUpdateQuery}
          />
          <SearchResults
              searchResults={searchResults}
              addToShelf={addToShelf}
              shelfOptions={shelfOptions}
          />
        </div>
    )
  }
}

export default SearchBooks;
