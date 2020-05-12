import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


class SearchBooks extends React.Component {
  static propTypes = {
    closeSearch: PropTypes.func.isRequired
  }

  state = {
    query: ""
  }

  updateQuery = (query) => {
    this.setState(() => ({query: query.trim()}))
  }


  render() {
    const {closeSearch} = this.props;
    return (
        <div className={"search-books"}>
          <SearchBar
              closeSearch={closeSearch}
              query={this.state.query}
              updateQuery={this.updateQuery}
          />
          <SearchResults/>
        </div>
    )
  }
}

export default SearchBooks;
