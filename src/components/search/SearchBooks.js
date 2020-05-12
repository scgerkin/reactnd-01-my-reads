import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


class SearchBooks extends React.Component {
  static propTypes = {
    closeSearch: PropTypes.func.isRequired
  }
  render() {
    const {closeSearch} = this.props;
    return (
        <div className={"search-books"}>
          <SearchBar closeSearch={closeSearch}/>
          <SearchResults/>
        </div>
    )
  }
}

export default SearchBooks;
