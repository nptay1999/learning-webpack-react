import React from "react";
import Image from "./assets/react.png";
import ImageSVG from "./assets/react-logo-svg.svg";

const App = () => {
  return (
    <div>
      <h1>React Typescript Webpack starter Template</h1>
      <img src={Image} alt="react-logo" width={300} height={300} />
      <img src={ImageSVG} alt="react-logo" width={300} height={300} />
    </div>
  );
};

export default App;
