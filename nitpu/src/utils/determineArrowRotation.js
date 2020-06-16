import { rotations } from "../constants/rotations";

export const determineArrowRotation = (row, column) => {
  switch (true) {
    case row < 2 && column < 2:
      return rotations.down;
      break;

    case row > 2 && column < 2:
      return rotations.down;
      break;

    default:
      return rotations.middle;
      break;
  }
};
