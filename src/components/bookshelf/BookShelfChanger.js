import React from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends React.Component {
  static propTypes = {
    shelfOptions: PropTypes.array.isRequired,
    currentShelf: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const {shelfOptions, currentShelf, onChangeShelf} = this.props;
    return (
        <div className={"book-shelf-changer"}>
          <select
              value={currentShelf}
              onChange={(event) => onChangeShelf(event.target.value)}
          >
            <option value="move" disabled>Move to...</option>
            {shelfOptions.map(shelf => (
                <option
                    key={shelf}
                    value={shelf}
                >{shelf}</option>
            ))}
            <option value="none">None</option>
          </select>
        </div>
    )
  }
}

export default BookShelfChanger;
