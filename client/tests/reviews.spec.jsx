import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Reviews from '../src/reviews';
import Review from '../src/review';

configure({ adapter: new Adapter() });

const dummyData = {
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
};

describe('Should set state based on api response', () => {
  let wrapper;
  let state;
  beforeAll(() => {
    wrapper = shallow(<Reviews />);
    wrapper.instance().setData({ data: dummyData });
    state = wrapper.state();
  });

  test('sets reviews state', async () => {
    expect(state.reviews).toEqual(dummyData.reviews);
  });

  test('sets overall stars state', async () => {
    expect(state.overallStars).toEqual('2.0');
  });
});

describe('Should render reviews based on state', () => {
  const wrapper = mount(<Reviews />);

  test('have no reviews', () => {
    expect(wrapper.find(Review).length).toBe(0);
  });

  test('have no html', () => {
    expect(wrapper.text()).toBe('');
  });

  test('render a review', () => {
    wrapper.setState({ reviews: dummyData.reviews, overallStars: dummyData.overallStars }, () => {
      expect(wrapper.find(Review).length).toBe(1);
    });
  });
});
