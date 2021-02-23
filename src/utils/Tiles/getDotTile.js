export const getDotTile = (tiles) => {
  return tiles.flat().find((tile) => tile.isDot);
};
