import React from 'react';
import ReactDOM from 'react-dom';
import styles from './reviews.styles.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.red}>React works!</div>
    );
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));

module.hot.accept();
