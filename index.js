import React from "react";
import { render } from "react-dom";
import HelloCountry from "./HelloCountry";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const App = () => (
  <div style={styles}>
    <HelloCountry />
  </div>
);

render(<App />, document.getElementById("root"));
