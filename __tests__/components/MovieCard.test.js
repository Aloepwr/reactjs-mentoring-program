import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import { MovieCard } from "../../src/components/MovieCard";

configure({ adapter: new Adapter() });

const title = "test title";
const release_date = "1906-08-24";
const poster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg";
const id = 111;
const type = "movie";

describe("Movie card component", () => {
  test("renders valid layout when it receives all props", () => {
    const tree = renderer.create(
      <MemoryRouter>
        <MovieCard title={ title } release_date={ release_date } poster={ poster } type={ type } id={ id }/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders valid layout without release_date", () => {
    const tree = renderer.create(
      <MemoryRouter>
        <MovieCard title={ title } poster={ poster } type={ type } id={ id }/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("constructs link for router", () => {
    const wrapper = mount(
      <MemoryRouter>
        <MovieCard type={ type } id={ id }/>
      </MemoryRouter>
    );

    expect(wrapper.find('[href="/movie/111"]').length).toBe(1);
  });
});