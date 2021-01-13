import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";

/* const sampleData = [
  {
    id: "animal",
    parent: null,
  },
  {
    id: "home",
    parent: "animal",
  },
  {
    id: "dog",
    parent: "home",
  },
  {
    id: "labrador",
    parent: "dog",
  },
  {
    id: "haskey",
    parent: "dog",
  },
  {
    id: "cat",
    parent: "home",
  },
  {
    id: "lalya",
    parent: "cat",
  },
];

function createTree(arr) {
  const firstRoot = arr.find((item) => !item.parent);
  const children = (item) => 
  // const three = 
} */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
