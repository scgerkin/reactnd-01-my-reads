import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  static propTypes = {
    closeSearch: PropTypes.func.isRequired
  }

  render() {
    const {closeSearch} = this.props;
    return (
        <div className={"search-books-bar"}>
          <button
              className={"close-search"}
              onClick={closeSearch}
          >Close
          </button>
        </div>
    )
  }
}

export default SearchBar;
