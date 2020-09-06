import { atom } from "recoil";

export const recoilDotTile = atom({
  key: "dotTile",
  default: {
    row: 2,
    column: 2,
    isDot: true,
    wasVisited: false,
  },
});
