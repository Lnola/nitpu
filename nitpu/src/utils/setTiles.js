import { tile } from "../constants/tile";

export const setTiles = (dotTile, numberOfTiles) => {
  let array = [];
  for (let rowIndex = 0; rowIndex < numberOfTiles; rowIndex++)
    array.push(getArrayWithTiles(rowIndex, dotTile, numberOfTiles));

  return array;
};

const getArrayWithTiles = (rowIndex, dotTile, numberOfTiles) => {
  let arrayWithTiles = [];
  for (let columnIndex = 0; columnIndex < numberOfTiles; columnIndex++)
    arrayWithTiles.push(
      tile(rowIndex, columnIndex, isDotTile(dotTile, rowIndex, columnIndex))
    );

  return arrayWithTiles;
};

const isDotTile = (dotTile, rowIndex, columnIndex) => {
  return dotTile.row === rowIndex && dotTile.column === columnIndex;
};
