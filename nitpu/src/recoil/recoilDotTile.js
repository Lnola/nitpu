import { atom } from "recoil";

export const recoilDotTile = atom({
  key: "",
  default: {
    row: 2,
    column: 2,
    isDot: true,
  },
});
