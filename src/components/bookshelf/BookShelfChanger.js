import React from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends React.Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired
  }
  render() {
    const { onChangeShelf } = this.props;
    return (
        <div className={"book-shelf-changer"}>
          <select onChange={onChangeShelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    )
  }
}

export default BookShelfChanger;
