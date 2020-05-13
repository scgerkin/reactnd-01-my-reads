import React from "react";
import PropTypes from "prop-types";
import BookItem from "../bookshelf/BookItem";
import EmptyResults from "./EmptyResults";

class SearchResults extends React.Component {
  static propTypes = {
    searchResults: PropTypes.array,
    addToShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    wasTouched: PropTypes.bool.isRequired
  }
  render() {
    const {searchResults, addToShelf, shelfOptions, wasTouched} = this.props;
    return (
        <div className={"search-books-results"}>
          {searchResults.length > 0 ? (
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
          ): (
            <EmptyResults wasTouched={wasTouched}/>
          )}
        </div>
    )
  }
}

export default SearchResults;
