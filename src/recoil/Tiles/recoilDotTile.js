import { atom } from "recoil";

export const recoilDotTile = atom({
  key: "dotTile",
  default: {
    row: 0,
    column: 0,
    isDot: true,
    wasVisited: false,
  },
});
