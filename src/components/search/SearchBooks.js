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
    shelfOptions: PropTypes.array.isRequired,
    currentlyTrackedBooks: PropTypes.array.isRequired
  }

  state = {
    query: "",
    touched: false,
    searchResults: []
  }

  // FIXME: This is a mess but working. At least pull out some stuff
  //  into a new function.
  onUpdateQuery = (event) => {
    const { currentlyTrackedBooks } = this.props;
    this.setState(() => ({touched: true}));
    event.persist();
    this.setState(() => ({
      query: event.target.value
    }));
    if (!this.debouncedFn) {
      this.debouncedFn = debounce(() => {
        const searchString = event.target.value;
        this.getBooks(searchString).then((results) => {
          if (!(results instanceof Array)) {
            this.setState(() => ({searchResults: []}))
          }
          else {
            results.map(result => {
              const trackedBook = currentlyTrackedBooks.filter(book => book.id === result.id);
              if (trackedBook.length >= 1) {
                result.shelf = trackedBook[0].shelf;
              }
              return result;
            });
            this.setState(() => ({searchResults: results}));
          }
        });
      }, 600);
    }
    this.debouncedFn();
  }

  getBooks = (value) => BooksAPI.search(value);

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
              wasTouched={this.state.touched}
          />
        </div>
    )
  }
}

export default SearchBooks;
