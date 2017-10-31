import { shallow, configure } from "enzyme";
import HeaderFilter from "../../src/components/HeaderFilter";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("HeaderFilter movieListBar of results found", () => {
  describe("single result", () => {
    it("render single version", () => {
      const wrapper = shallow(<HeaderFilter movies={["not zero length"]} />);
      expect(wrapper.contains(<div>1 result was found</div>)).toEqual(true);
    });

  });

  describe("plural results", () => {
    it("render plural version", () => {
      const wrapper = shallow(<HeaderFilter movies={["1", "2"]} />);
      expect(wrapper.contains(<div>2 results was found</div>)).toEqual(true);
    });
  });
});