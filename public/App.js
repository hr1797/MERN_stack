"use strict";

var continents = ["Africa", "America", "Asia", "Australia", "Europe"];
var hello_continents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var message = hello_continents.join(" ");
var element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById("contents"));