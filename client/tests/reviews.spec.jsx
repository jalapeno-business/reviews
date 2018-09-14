import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Reviews from '../src/reviews';
import Review from '../src/review';

configure({ adapter: new Adapter() });

describe('<Reviews />', () => {
  const wrapper = mount(<Reviews />);

  test('Should have no reviews', () => {
    expect(wrapper.find(Review).length).toBe(0);
  });

  test('renders a review', () => {
    wrapper.setState({
      reviews: [
        {
          name: 'Edgar H.',
          date: '2012-05-24T22:56:22.927Z',
          text: 'Officiis reiciendisure velit dolor est fuga. Ut mollitia',
          profilePic: 'https://placeimg.com/72/72/people',
          star: false,
          numOfStars: 2,
        },
      ],
      overallStars: 3,
    }, () => {
      expect(wrapper.find(Review).length).toBe(1);
    });
  });
});
