import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Reviews from '../src/reviews';

configure({ adapter: new Adapter() });

describe('<Reviews />', () => {
  test('renders a div', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper).toContainReact(<div id="reviews" className="colorme">React works!</div>);
  });
});
