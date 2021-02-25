import { rotations } from '../../constants/Tiles/rotations';

export const determineTileType = (tile, dotTile, isWin, numberOfTiles) => {
  if (dotTile)
    switch (true) {
      case isWin:
        return winCase(tile, numberOfTiles);

      case tile.isDot:
        return rotations.dot;

      case tile.row === dotTile.row && tile.column < dotTile.column:
        return rotations.right;

      case tile.row === dotTile.row && tile.column > dotTile.column:
        return rotations.left;

      case tile.row < dotTile.row && tile.column === dotTile.column:
        return rotations.down;

      case tile.row > dotTile.row && tile.column === dotTile.column:
        return rotations.up;

      default:
        return rotations.none;
    }
};

const winCase = (tile, numberOfTiles) => {
  if (numberOfTiles % 2 === 0) {
    if (tile.row === 0) {
      switch (tile.column) {
        case 0:
          return rotations.w;
        case 1:
          return rotations.i;
        case 2:
          return rotations.n;
        default:
          return;
      }
    }
  } else {
    if (tile.row === Math.floor(numberOfTiles / 2)) {
      switch (tile.column) {
        case Math.floor(numberOfTiles / 2) - 1:
          return rotations.w;
        case Math.floor(numberOfTiles / 2):
          return rotations.i;
        case Math.floor(numberOfTiles / 2) + 1:
          return rotations.n;
        default:
          return;
      }
    }
  }
};
