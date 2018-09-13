import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const Review = (props) => {
  const {
    name, date, numOfStars, text, profilePic,
  } = props;
  return (
    <div>
      <img alt="profile pic" src={profilePic} />
      <p>{name}</p>
      <p>{new Moment(date).format('MMMM D, Y')}</p>
      <p>{`${'★'.repeat(numOfStars)} ${text}`}</p>
      <hr />
    </div>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  numOfStars: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  // star: PropTypes.bool.isRequired,
};

export default Review;
