import React from "react";

import Arrows from "./levels/1.arrows";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Arrows />
      </RecoilRoot>
    </>
  );
};

export default App;
