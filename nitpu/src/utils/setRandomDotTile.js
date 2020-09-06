import { tile } from "../constants/tile";

export const setRandomDotTile = (
  setDotTile,
  numberOfTiles,
  visitedDotTiles
) => {
  const newTile = tile(
    Math.floor(Math.random() * numberOfTiles),
    Math.floor(Math.random() * numberOfTiles),
    true,
    true
  );

  setDotTile(newTile);
};
