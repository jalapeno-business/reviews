import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styles from './reviews.styles.css';


const Review = (props) => {
  const {
    name, date, numOfStars, text, profilePic, star,
  } = props;
  return (
    <div className={styles.zgtGoogleReviewContainer}>
      <div className={styles.miniMode}>
        <p>{`${'★'.repeat(numOfStars)} ${text}`}</p>
      </div>

      <div className={styles.boxOne}>
        <span className={styles.parent}>
          <img className={styles.profilePic} alt="profile pic" src={profilePic} />
          {star ? <img className={styles.star} alt="profile pic" src="https://vignette.wikia.nocookie.net/justdance/images/2/2e/Star.png" /> : ''}
        </span>
      </div>

      <div className={styles.boxTwo}>
        <span>
          <p>{name}</p>
          <p className={styles.detailText}>{new Moment(date).format('MMMM D, Y')}</p>
          <p>{`${'★'.repeat(numOfStars)} ${text}`}</p>
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
