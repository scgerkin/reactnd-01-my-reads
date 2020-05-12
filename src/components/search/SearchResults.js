import React from "react";
import PropTypes from "prop-types";
import BookItem from "../bookshelf/BookItem";

class SearchResults extends React.Component {
  static propTypes = {
    searchResults: PropTypes.array,
    changeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired
  }
  render() {
    const {searchResults, addToShelf, shelfOptions} = this.props;
    return (
        <div className={"search-books-results"}>
          {searchResults && (
              <ol className={"books-grid"}>
                {searchResults.map(result => (
                    <li key={result.id}>
                      <BookItem
                        book={result}
                        changeShelf={addToShelf}
                        shelfOptions={shelfOptions}
                      />
                    </li>
                ))}
              </ol>
          )}
        </div>
    )
  }
}

export default SearchResults;
