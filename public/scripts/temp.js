"use strict";

// const app = {
//     title: "put your life in the hands of a computer",
//     subtitle: "i am subtitle",
//     options: [],
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if (option) {
//         app.options.push(e.target.elements.option.value);
//         e.target.elements.option.value = "";
//         render();
//     }
// };
// const onRemoveAll = () => {
//     app.options = [];
//     render();
// };
// const onMakeDecision = () => {
//     const randomNumber = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNumber];
//     console.log(option);
// };

// const render = () => {
//     const temp = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>
//                 {app.options.length > 0
//                     ? "here are your optios : "
//                     : "no options"}
//             </p>
//             <p>{app.options.length}</p>

//             <button
//                 disabled={app.options.length === 0}
//                 onClick={onMakeDecision}
//             >
//                 What Should I Do ?
//             </button>

//             <button onClick={onRemoveAll}>Remove All</button>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"></input>
//                 <button> Add Option</button>
//             </form>
//             <ol>
//                 {app.options.map((option) => (
//                     <li key={option}> {option}</li>
//                 ))}
//             </ol>
//         </div>
//     );

//     ReactDOM.render(temp, document.getElementById("root"));
// };
// render();

var app = {
  toggle: false,
  details: 'Start editing to see some magic happen!'
};

var Toggle = function Toggle() {

  app.toggle = !app.toggle;
  render();
};

var render = function render() {

  var App = React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "h1",
      { onClick: Toggle },
      "click me"
    ),
    app.toggle && React.createElement(
      "h3",
      null,
      " ",
      React.createElement(
        "h3",
        null,
        app.details
      ),
      " "
    )
  );

  ReactDOM.render(App, document.getElementById("root"));
};
render();
