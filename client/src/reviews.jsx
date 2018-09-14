import React from 'react';
import axios from 'axios';
import styles from './reviews.styles.css';
import Review from './review';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.server = 'localhost:8080';
    this.state = {
      overallStars: null,
      reviews: [],
    };
    this.setData = this.setData.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  componentWillMount() {
    this.getRestaurant(window.location.pathname).then(this.setData);
  }

  setData(res) {
    const { reviews } = res.data;
    const starsSum = reviews.reduce((avg, { numOfStars }) => avg + numOfStars, 0);
    const overallStars = (starsSum / reviews.length).toFixed(1);
    this.setState({ reviews, overallStars });
  }

  getRestaurant(id) {
    return axios.get(`http://${this.server}/api/restaurant${id}`);
  }

  render() {
    const { reviews, overallStars } = this.state;
    if (reviews.length > 0) {
      return (
        <div id={styles.reviews} className={styles.zgtPlaceSheetBox}>
          <div className={[styles.zgtGoogleReviewsHeaderContainer, styles.sectionHeading, styles.zgtPlaceSheetBottom].join(' ')}>
            <span className={styles.zgtGoogleReviewsTitle}>Google Reviews</span>
            <span className={styles.zgtGoogleReviewsData}>
              {overallStars}
              <span>{'★'.repeat(Math.ceil(overallStars))}</span>
            </span>
          </div>
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
    return '';
  }
}
