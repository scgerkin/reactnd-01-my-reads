import React from "react";
import PropTypes from "prop-types";

// TODO: Fix display when searching is done but no results found
class EmptyResults extends React.Component {
  static propTypes = {
    wasTouched: PropTypes.bool.isRequired
  }

  render() {
    const {wasTouched} = this.props;
    return (
        <div className={"search-books-results"}>
          {wasTouched ? (
              <p>Searching...</p>
          ) : (
              <p>Begin typing to perform a search!</p>
          )}
        </div>
    )
  }
}

export default EmptyResults;
