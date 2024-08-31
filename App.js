const parent = React.createElement(
  "div",
  { id: "parent " },
  React.createElement("div", { id: "child " }, [
    React.createElement("h1", {}, "hi Thia Is Child"),
    React.createElement("h2", {}, "Hi I am  h1's Siblings "),
  ]),
  React.createElement("div", { id: "child2 " }, [
    React.createElement("h1", {}, "hi this is nested Objects with help of Arrays"),
    React.createElement("h2", {}, "Hi I am  h1's Siblings "),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*const heading = React.createElement("h1", {}, "Hello Aditya From React Inside it ");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const heading1 =  React.createElement("h2", {}, ("Hi I,m Learning React "));
const self = ReactDOM.createRoot(document.getElementById("self"));
self.render(heading1);*/
