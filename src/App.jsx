// Same output, one uses pure JS(with createEelement) and the other uses JSX
//   const element = React.createElement(
//     "div",
//     { title: "Outer div", className: "first_title" },
//     React.createElement("h1", null, "Hello World!")
//   );

const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const hello_continents = Array.from(continents, (c) => `Hello ${c}!`);
const message = hello_continents.join(` `);

const element = (
  <div title="Outer div">
    <h1>{message}</h1>
  </div>
);

ReactDOM.render(element, document.getElementById("contents"));
