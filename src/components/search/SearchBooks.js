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
          this.setState(() => ({searchResults: results instanceof Array ? results : []}))
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
          />
        </div>
    )
  }
}

export default SearchBooks;
