import React from "react";

import Tiles from "./levels/1.tiles";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Tiles />
      </RecoilRoot>
    </>
  );
};

export default App;
