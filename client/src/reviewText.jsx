import React from 'react';
import PropTypes from 'prop-types';
import styles from './reviews.styles.css';

export default class ReviewText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortMode: true, // when true, show the trimmed text with '... Show More'
    };
    this.toggleMode = this.toggleMode.bind(this);
  }

  /**
   * Inverts the value of shortMode
   */
  toggleMode() {
    const { shortMode } = this.state;
    this.setState({ shortMode: !shortMode });
  }

  render() {
    const { text, stars } = this.props;
    const { shortMode } = this.state;
    const maxLength = 200;
    if (text.length <= maxLength) {
      return text;
    } if (shortMode) {
      return (
        <div
          className={styles.reviewText}
          onClick={this.toggleMode}
          onKeyPress={this.toggleMode}
          role="button"
          tabIndex="0"
        >
          {stars}
          {text.slice(0, maxLength)}
          <span className={styles.showMore}> ... Show More</span>
        </div>
      );
    }
    return (
      <div
        className={styles.reviewText}
        onClick={this.toggleMode}
        onKeyPress={this.toggleMode}
        role="button"
        tabIndex="0"
      >
        {stars}
        {text}
      </div>
    );
  }
}

ReviewText.propTypes = {
  stars: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
