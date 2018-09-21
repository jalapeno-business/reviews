import React from 'react';
import ReactDOM from 'react-dom';

import Reviews from './reviews';

// window.Reviews = Reviews;

ReactDOM.render(<Reviews />, document.getElementById('zagat-reviews'));

module.hot.accept();
