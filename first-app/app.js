//const heading = React.createElement("h1", {}, "Hello World from React");

import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag from first child"),
    React.createElement("h2", {}, "This is h2 tag from first child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 tag from second child"),
    React.createElement("h2", {}, "This is h2 tag from 2nd child"),
  ]),
]);

const root = createRoot(document.getElementById("root"));
root.render(heading);
