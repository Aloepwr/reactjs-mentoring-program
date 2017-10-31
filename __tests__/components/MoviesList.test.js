import { shallow, configure } from "enzyme";
import MoviesList from "../../src/components/MoviesList";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe("Empty search results", () => {
  const wrapper = shallow(<MoviesList movies={ [] } children={ <div></div> }/>);
  
  it("renders empty page", () => {
    expect(wrapper.contains(<h1 className="no-content">No films found</h1>)).toEqual(true);
  });
});

describe("Filled search results", () => {
  const wrapper = shallow(<MoviesList movies={ ["not zero length"] } children={ <div></div> }/>);
  
  it("renders list of movies", () => {
    expect(wrapper.find("MovieCard").length).toEqual(1);
  });
});

describe("MoviesList props for MovieCard", () => {
  const movies = [{
    title: "test title",
    release_date: "1906-08-24",
    poster: "/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg",
    id: 111,
    type: "movie"
  }];
  const wrapper = shallow(<MoviesList movies={movies} />);
  const movieCardProps = wrapper.find("MovieCard").first().props();

  it("passes modified year", () => {
    expect(movieCardProps["release_date"]).toBe("1906");
  });

  it("passes modified url of poster", () => {
    expect(movieCardProps["poster"]).toBe("https://image.tmdb.org/t/p/w185_and_h278_bestv2/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg");
  });

  it("passes not modified props", () => {
    expect(movieCardProps["title"]).toBe("test title");
    expect(movieCardProps["id"]).toBe(111);
    expect(movieCardProps["type"]).toBe("movie");
  });
});