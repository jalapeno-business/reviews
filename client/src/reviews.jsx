import React from 'react';
import styles from './reviews.styles.css';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="reviews" className={styles.colorme}>React works!</div>
    );
  }
}
