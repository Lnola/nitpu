import { tile } from '../../constants/Tiles/tile';

export const createRandomDotTile = (setDotTile, numberOfTiles) => {
  setDotTile(tile(Math.floor(Math.random() * numberOfTiles), Math.floor(Math.random() * numberOfTiles), true, true));
};

export const setRandomDotTile = (tiles, setTiles) => {
  const nonVisitedTiles = tiles.flat().filter(el => !el.isDot && !el.wasVisited);
  const randomTile = nonVisitedTiles[Math.floor(Math.random() * nonVisitedTiles.length)];

  setTiles(prevState =>
    prevState.map(row =>
      row.map(el => (el.row === randomTile?.row && el.column === randomTile?.column ? { ...el, isDot: true } : el)),
    ),
  );
};
