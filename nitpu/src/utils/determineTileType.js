import { rotations } from "../constants/rotations";

export const determineTileType = (tile, dotTile) => {
  switch (true) {
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
