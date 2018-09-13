import React from 'react';
import axios from 'axios';
// import styles from './reviews.styles.css';
import Review from './review';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.server = 'localhost:8080';
    this.state = {
      overallStars: null,
      reviews: [],
    };
  }

  componentWillMount() {
    console.log(window.location);
    axios.get(`http://${this.server}/api/restaurant/2`)
      .then(res => res.data)
      .then(data => data.reviews)
      .then((reviews) => {
        const starsSum = reviews.reduce((avg, { numOfStars }) => avg + numOfStars, 0);
        const overallStars = (starsSum / reviews.length).toFixed(1);
        this.setState({ reviews, overallStars });
      });
  }

  render() {
    const { reviews, overallStars } = this.state;
    return (
      <div id="reviews">
        <span>GOOGLE REVIEWS </span>
        <span>{overallStars}</span>
        &nbsp;
        <span>{'★'.repeat(Math.ceil(overallStars))}</span>
        <hr />
        {reviews.map(review => (
          <Review
            key={review.name}
            numOfStars={review.numOfStars}
            date={review.date}
            name={review.name}
            text={review.text}
            profilePic={review.profilePic}
            star={review.star}
          />
        ))}
      </div>
    );
  }
}
