import currentMovie from "../../src/reducers/currentMovie";
import { RECEIVE_CURRENT_MOVIE } from "../../src/actions/index";

describe("currentMovie reducer test", () => {
  it("should return state for current movie", () => {
    expect(
      currentMovie({}, {
        type: RECEIVE_CURRENT_MOVIE,
        currentMovie: {
          "adult": false,
          "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
          "belongs_to_collection": null,
          "budget": 25200000,
          "genres": [
            {
              "id": 16,
              "name": "Comedy"
            }
          ]
        }
      })
    ).toEqual(
      {
        "adult": false,
        "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
        "belongs_to_collection": null,
        "budget": 25200000,
        "genres": [
          {
            "id": 16,
            "name": "Comedy"
          }
        ]
      }
    )
  });

  it("should return the initial state", () => {
    expect(
      currentMovie(undefined, {})).toEqual({})
  });
});