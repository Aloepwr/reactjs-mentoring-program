import React from 'react';
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import MovieCardDescription from "../../src/components/MovieCardDescription";

const movie = {
  title: "test title",
  release_date: "1906-08-24",
  poster: "/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg",
  id: 111,
  type: "movie",
  vote_average: 4.1,
  runtime: 150,
  overview: "Some overview",
  budget: 10000,
  seasons: 1,
  last_air_date: "2074-11-27"
};

describe("Movie card description component", () => {
  test("renders valid layout when it receives all props", () => {
    const tree = renderer.create(
      <MemoryRouter>
        <MovieCardDescription currentMovie={ movie }/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const movieWithoutSomeProps = {
    title: "test title",
    poster: "/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg",
    id: 111,
    type: "movie",
    overview: "Some overview"
  };

  test("renders layout without vote_average, release_date, runtime, budget, seasons, last_air_date ", () => {
    const tree = renderer.create(
      <MemoryRouter>
        <MovieCardDescription currentMovie={ movieWithoutSomeProps }/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});