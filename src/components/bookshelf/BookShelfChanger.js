import React from "react";
import PropTypes from "prop-types";
import {camelToSentence} from "../../utils/CamelToSentence";

class BookShelfChanger extends React.Component {
  static propTypes = {
    shelfOptions: PropTypes.array.isRequired,
    currentShelf: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    currentShelf: ""
  }

  componentDidMount() {
    this.setState(() => ({currentShelf: this.props.currentShelf}));
  }

  onChangeShelf = (shelf) => {
    this.setState(() => ({currentShelf: shelf}));
    this.props.changeShelf(shelf);
  }

  render() {
    const {shelfOptions} = this.props;
    const {currentShelf} = this.state;
    return (
        <div className={"book-shelf-changer"}>
          <select
              value={currentShelf}
              onChange={(event) => this.onChangeShelf(event.target.value)}
          >
            <option value="move" disabled>Move to...</option>
            {shelfOptions.map(shelf => (
                <option
                    key={shelf}
                    value={shelf}
                >{camelToSentence(shelf)}</option>
            ))}
          </select>
        </div>
    )
  }
}

export default BookShelfChanger;
