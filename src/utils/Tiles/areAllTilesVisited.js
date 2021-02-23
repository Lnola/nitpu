export const areAllTilesVisited = (tiles) => {
  return (
    tiles.length !== 0 &&
    tiles.flat().filter((el) => !el.wasVisited).length === 0
  );
};
