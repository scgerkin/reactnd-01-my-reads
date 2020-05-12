import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  static propTypes = {
    closeSearch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired
  }

  render() {
    const {closeSearch, query, updateQuery} = this.props;
    return (
        <div className={"search-books-bar"}>
          <button
              className={"close-search"}
              onClick={closeSearch}
          >Close
          </button>
          <div className={"search-books-input-wrapper"}>
            <input
                type={"text"}
                placeholder={"Search by title or author"}
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
    )
  }
}

export default SearchBar;
