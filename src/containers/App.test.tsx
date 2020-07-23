import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

import renderer from "react-test-renderer";

let wrapper:any;

beforeEach(() => {
    wrapper = shallow(<App/>);
});


test("renders learn react link", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/Button/i);
  // expect(linkElement).toBeInTheDocument();
  // const wrapper = shallow(<App />);
  const textInButton = wrapper.find("Button").text();
 
  expect(textInButton).toBe("Button");
});

describe("<App />", () => {
  it("match to snapshot", () => {
    // const tree = renderer.create(<App />).toJSON();
    // const wrapper = shallow(<App />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
