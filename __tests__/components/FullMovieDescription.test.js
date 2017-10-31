import { shallow, configure } from "enzyme";
import { FullMovieDescription } from "../../src/components/FullMovieDescription";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("FullMovieDescription component", () => {
  const loadMovieInfo = jest.fn();

  beforeEach(() => {
    loadMovieInfo.mockClear();
  });

  const props = {
    match: {
      params: {
        type: "movie",
        filmId: 111
      }
    },
    loadMovieInfo: loadMovieInfo,
    relatedMovies: []
  };
  
  it("calls componentWillMount", () => {
    const wrapper = shallow(<FullMovieDescription currentMovie={{director: "some director"}} {...props} />);
    expect(loadMovieInfo).toHaveBeenCalledWith(111, "movie");
  });

  describe("calls componentWillReceiveProps", () => {
    it("sets new filmId and rerenders component", () => {
      const newProps = {
        match: {
          params: {
            type: "movie",
            filmId: 222
          }
        },
        loadMovieInfo: loadMovieInfo,
        relatedMovies: []
      };
      const wrapper = shallow(<FullMovieDescription currentMovie={{director: "some director"}} {...props} />);
      wrapper.setProps(newProps);
      expect(loadMovieInfo).toHaveBeenCalledWith(222, "movie");
    });

    it("sets same filmId and does not rerender component", () => {
      const newProps = {
        match: {
          params: {
            type: "movie",
            filmId: 333
          }
        },
        loadMovieInfo: loadMovieInfo,
        relatedMovies: []
      };
      const wrapper = shallow(<FullMovieDescription currentMovie={{director: "some director"}} {...props} />);
      wrapper.setProps(newProps);
      wrapper.setProps(newProps);
      expect(loadMovieInfo.mock.calls).toEqual([[111, "movie"], [333, "movie"]]);
    });
  });

  describe("'Films by' movie list bar", () => {
    it("renders gray strip with director name", () => {
      const wrapper = shallow(<FullMovieDescription currentMovie={{director: "some director"}} {...props} />);
      expect(wrapper.contains("Films by some director")).toBe(true);
    });
  });

});