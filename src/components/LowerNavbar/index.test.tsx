import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import LowerNavbar from "./index";

import renderer from "react-test-renderer";

let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<LowerNavbar />);
});

// test("renders learn react link", () => {
// const { getByText } = render(<App />);
// const linkElement = getByText(/Button/i);
// expect(linkElement).toBeInTheDocument();
// const wrapper = shallow(<App />);
//   const textInButton = wrapper.find("Button").text();

//   expect(textInButton).toBe("Button");
// });

describe("<LowerNavbar />", () => {
  it("match to snapshot", () => {
    // const tree = renderer.create(<App />).toJSON();
    // const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders learn react link", () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/Button/i);
    // expect(linkElement).toBeInTheDocument();
    // const wrapper = shallow(<App />);
    const logo = wrapper.find("img").prop("src");
    expect(logo).toEqual("3stars.png");
  });
});
