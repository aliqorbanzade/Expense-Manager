'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// // const app = {
// //     title: "put your life in the hands of a computer",
// //     subtitle: "i am subtitle",
// //     options: [],
// // };

// // const onFormSubmit = (e) => {
// //     e.preventDefault();

// //     const option = e.target.elements.option.value;

// //     if (option) {
// //         app.options.push(e.target.elements.option.value);
// //         e.target.elements.option.value = "";
// //         render();
// //     }
// // };
// // const onRemoveAll = () => {
// //     app.options = [];
// //     render();
// // };
// // const onMakeDecision = () => {
// //     const randomNumber = Math.floor(Math.random() * app.options.length);
// //     const option = app.options[randomNumber];
// //     console.log(option);
// // };

// // const render = () => {
// //     const temp = (
// //         <div>
// //             <h1>{app.title}</h1>
// //             {app.subtitle && <p>{app.subtitle}</p>}
// //             <p>
// //                 {app.options.length > 0
// //                     ? "here are your optios : "
// //                     : "no options"}
// //             </p>
// //             <p>{app.options.length}</p>

// //             <button
// //                 disabled={app.options.length === 0}
// //                 onClick={onMakeDecision}
// //             >
// //                 What Should I Do ?
// //             </button>

// //             <button onClick={onRemoveAll}>Remove All</button>
// //             <form onSubmit={onFormSubmit}>
// //                 <input type="text" name="option"></input>
// //                 <button> Add Option</button>
// //             </form>
// //             <ol>
// //                 {app.options.map((option) => (
// //                     <li key={option}> {option}</li>
// //                 ))}
// //             </ol>
// //         </div>
// //     );

// //     ReactDOM.render(temp, document.getElementById("root"));
// // };
// // render();

// // const app={
// //     toggle : false,
// //     details: 'Start editing to see some magic happen!'
// //   }

// //   const Toggle =()=>{

// //     app.toggle = !app.toggle
// //     render()

// //   }

// // const render = ()=>{

// //     const App =
// //          (
// //           <div className="App">
// //             <h1 onClick={Toggle}>click me</h1>
// //             {app.toggle && <h3> <h3>{app.details}</h3> </h3>  }

// //           </div>
// //         );

// //       ReactDOM.render(App, document.getElementById("root"));
// // }
// // render()

// ************************
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };

        _this.removeAll = _this.removeAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.removeOne = _this.removeOne.bind(_this);

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'removeOne',
        value: function removeOne(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[randomNum]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'enter a valid value to add';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this value already exists';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (error) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision App";
            var subTitle = "Put your life in the hands of a computer";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleRemove: this.removeAll, handleRemoveOne: this.removeOne }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' ',
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    ' ',
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.props.handlePick, disabled: !this.props.hasOption },
                ' what should i do ? '
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemove },
                    'remove All'
                ),
                this.props.options.map(function (option, index) {
                    return React.createElement(Option, { option: option, key: index, handleRemoveOne: _this5.props.handleRemoveOne });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'span',
                    null,
                    ' ',
                    this.props.option
                ),
                React.createElement(
                    'button',
                    { onClick: function onClick(e) {
                            _this7.props.handleRemoveOne(_this7.props.option);
                        } },
                    ' Remove '
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this8 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this8.state = {
            error: undefined
        };
        _this8.handleAddOption = _this8.handleAddOption.bind(_this8);
        return _this8;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {

            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            // this.setState(()=>{
            //     return {
            //         error
            //     }
            // })

            //this is alternative way for above code

            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.body);

//********************* */
// class Action extends React.Component {
//     constructor(props) {
//         super(props);
//         this.reset = this.reset.bind(this);
//         this.Add = this.Add.bind(this);

//         this.state = {
//             count: 0,
//         };
//     }

//     reset() {

//         this.setState((prevState) => {
//             console.log(prevState);
//             console.log(this.state.count);
//             return({
//                 count : 0 

//             })
//         })
//         // this.setState(() => {
//         //     return({
//         //         count : this.state.count + 1 
//         //     })
//         // })
//         this.setState((prevState) => { 
//             return({
//                 count : prevState.count + 1 
//             })
//         })
//     }

//     Add() {        
//         this.setState(() => {
//             return({
//                 count : this.state.count + 1 
//             })
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1> {this.state.count}</h1>
//                 <button onClick={this.reset}> Reset </button>
//                 <button onClick={this.Add}>  add</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Action />, document.body);
