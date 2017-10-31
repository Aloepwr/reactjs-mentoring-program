import React from 'react';
import { shallow, configure } from "enzyme";
import { MoviesListResult } from '../../src/components/MoviesListResult';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("HeaderFilter movieListBar of results found", () => {
  describe("One result", () => {
    it("render single version", () => {
      const wrapper = shallow(<MoviesListResult movies={["not zero length"]} />);
      expect(wrapper.contains(<div>1 result was found</div>)).toEqual(true);
    });
  });

  describe("Some results", () => {
    it("render plural version", () => {
      const wrapper = shallow(<MoviesListResult movies={["1", "2"]} />);
      expect(wrapper.contains(<div>2 results was found</div>)).toEqual(true);
    });
  });
});