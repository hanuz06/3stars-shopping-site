import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import renderer from "react-test-renderer";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});

describe("<App />", () => {
  it("match to snapshot", () => {
    const tree = renderer.create(<App />).toJSON();   
    expect(tree).toMatchSnapshot();  
  });
});