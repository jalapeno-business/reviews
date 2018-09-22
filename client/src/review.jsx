import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styles from './reviews.styles.css';
import ReviewText from './reviewText';


const Review = (props) => {
  const {
    name, date, numOfStars, text, profilePic, star,
  } = props;
  return (
    <div className={styles.zgtGoogleReviewContainer}>
      <div className={styles.miniMode}>
        <ReviewText stars={'★'.repeat(numOfStars)} text={text} />
      </div>

      <div className={styles.boxOne}>
        <span className={styles.parent}>
          <img className={styles.profilePic} alt="profile pic" src={profilePic} />
          {star ? <img className={styles.star} alt="profile pic" src="https://s3.us-east-2.amazonaws.com/fec-zagat/Star-min.png" /> : ''}
        </span>
      </div>

      <div className={styles.boxTwo}>
        <span>
          <p>{name}</p>
          <p className={styles.detailText}>{new Moment(date).format('MMMM D, Y')}</p>
          <ReviewText stars={'★'.repeat(numOfStars)} text={text} />
        </span>
      </div>

      <div className={[styles.miniMode, styles.miniDetails].join(' ')}>
        <span>{name}</span>
        <span> · </span>
        <span className={styles.detailText}>{new Moment(date).format('MMMM D, Y')}</span>
      </div>

    </div>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  numOfStars: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  star: PropTypes.bool.isRequired,
};

export default Review;
