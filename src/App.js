import React from "react";
import { RecoilRoot } from "recoil";

import Tiles from "./levels/1. Tiles";

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
