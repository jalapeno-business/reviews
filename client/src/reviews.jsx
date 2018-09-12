import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>React works!</div>
    );
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));

module.hot.accept();
