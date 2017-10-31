import { shallow, configure } from "enzyme";
import { Header } from "../../src/components/Header";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const onMoviesClick = jest.fn();
const onTVShowsClick = jest.fn();
const onSubmitSearch = jest.fn();
const handleSubmit = fn => fn; // fn => onSubmitSearch from props.onSubmitSearch in <Header/> component

const wrapper = shallow(<Header
  isMoviesActive={true}
  isTVShowActive={false}
  onMoviesClick={onMoviesClick}
  onTVShowsClick={onTVShowsClick}
  onSubmitSearch = {onSubmitSearch}
  handleSubmit={handleSubmit}
/>);

const moviesButton = wrapper.find(".btn").first();
const tvShowsButton = wrapper.find(".btn").last();

describe("Search by movies is active", () => {
  describe("movies button", () => {
    it("has .btn-active class", () => {
      expect(moviesButton.hasClass("btn-active")).toBe(true);
    });

    it("doesn't have onClick handler", () => {
      moviesButton.simulate("click");
      expect(onMoviesClick.mock.calls.length).toBe(0);
    });
  });

  describe("tv shows button", () => {
    it("doesn't have .btn-active class", () => {
      expect(tvShowsButton.hasClass("btn-active")).toBe(false);
    });

    it("has onClick handler", () => {
      tvShowsButton.simulate("click");
      expect(onTVShowsClick.mock.calls.length).toBe(1);
    })
  });
});

describe("Submit search form", () => {
  it("calls callback after submitting form", () => {
    const searchForm = wrapper.find("form");
    searchForm.simulate('submit');
    expect(onSubmitSearch).toHaveBeenCalled();
  });
});