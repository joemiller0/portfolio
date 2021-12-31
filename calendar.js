'use strict';

// class Day extends React.Component {
//     render(){

//     }
// }
// class Week extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             weekArr: [],
//             // monthOriginDate: this.props.monthOriginDate, 
//             // startDate: this.props.startDate, 
//         }
//     }
//     componentDidMount(){
//         const year = this.props.monthOriginDate.getFullYear();
//         const monthInd = this.props.monthOriginDate.getMonth();

//         const weekData = {
//             monthIndex: monthInd,
//             year: year,
//             today: new Date(),
//         };

//         const totalDays = this.daysInMonth(weekData.monthIndex + 1, weekData.year);

//         const week = this.buildWeek(initialWeek.endDate, totalDays, weekData)
//         this.setState({ weekArr : week })
//     }

//     buildWeek = (startDate, totalDays, weekDate) => {
//         let weekArr = [];
//         for (let i = 0; i < 7; i++) {
//             if (startDate > totalDays) {
//                 weekArr.push(<td className="empty" key={Math.floor(Math.random() * 9000) + 1000}></td>);
//             } else {
//                 // weekData.today.setHours(19); Daylight savings 
//                 let fullDate = new Date(weekData.year, weekData.monthIndex, startDate).toISOString().split("T")[0]
//                 let dateStr = weekData.today.toISOString().split("T")[0]
//                 fullDate === dateStr
//                     ? weekArr.push(<td className="today" key={Math.floor(Math.random() * 9000) + 1000}>{startDate++}</td>)
//                     : weekArr.push(<td key={Math.floor(Math.random() * 9000) + 1000}>{startDate++}</td>)

//             }
//         }
//         return (weekArr);
//     }

//     render(){
//         return (<tr>{weekArr}</tr>)
//     }
// }

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_React$Component) {
    _inherits(Month, _React$Component);

    function Month() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Month);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            weekOne: [],
            weekTwo: [],
            weekThree: [],
            weekFour: [],
            weekFive: [],
            weekSix: [],
            monthOriginDate: new Date()
        }, _this.nextMonth = function () {
            var year = _this.state.monthOriginDate.getFullYear();
            var month = _this.state.monthOriginDate.getMonth() + 1;

            _this.setState({ monthOriginDate: new Date(year, month, 1) });

            var weekData = {
                monthIndex: month,
                year: year,
                today: new Date()
            };
            var totalDays = _this.daysInMonth(weekData.monthIndex + 1, weekData.year);
            var firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

            var initialWeek = _this.buildWeekOne(firstDayIndex, weekData);
            var second = _this.buildWeek(initialWeek.endDate, totalDays, weekData);
            var third = _this.buildWeek(initialWeek.endDate + 7, totalDays, weekData);
            var fourth = _this.buildWeek(initialWeek.endDate + 14, totalDays, weekData);
            var fifth = _this.buildWeek(initialWeek.endDate + 21, totalDays, weekData);

            if (initialWeek.endDate + 28 <= totalDays) {
                var sixth = _this.buildWeek(initialWeek.endDate + 28, totalDays, weekData);
                _this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: sixth
                });
            } else {
                _this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: null
                });
            }
        }, _this.prevMonth = function () {
            var year = _this.state.monthOriginDate.getFullYear();
            var month = _this.state.monthOriginDate.getMonth() - 1;

            _this.setState({ monthOriginDate: new Date(year, month, 1) });

            var weekData = {
                monthIndex: month,
                year: year,
                today: new Date()
            };

            var totalDays = _this.daysInMonth(weekData.monthIndex + 1, weekData.year);
            var firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

            var initialWeek = _this.buildWeekOne(firstDayIndex, weekData);
            var second = _this.buildWeek(initialWeek.endDate, totalDays, weekData);
            var third = _this.buildWeek(initialWeek.endDate + 7, totalDays, weekData);
            var fourth = _this.buildWeek(initialWeek.endDate + 14, totalDays, weekData);
            var fifth = _this.buildWeek(initialWeek.endDate + 21, totalDays, weekData);

            if (initialWeek.endDate + 28 <= totalDays) {
                var sixth = _this.buildWeek(initialWeek.endDate + 28, totalDays, weekData);
                _this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: sixth
                });
            } else {
                _this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: null
                });
            }
        }, _this.daysInMonth = function (m, y) {
            return new Date(y, m, 0).getDate();
        }, _this.buildWeekOne = function (firstDayIndex, weekData) {
            var date = 1;
            var weekOneArr = [];
            for (var i = 0; i < 7; i++) {
                if (i < firstDayIndex) {
                    weekOneArr.push(React.createElement("td", { className: "empty", key: Math.floor(Math.random() * 9000) + 1000 }));
                } else {
                    var fullDate = new Date(weekData.year, weekData.monthIndex, date).toISOString().split("T")[0];
                    var dateStr = weekData.today.toISOString().split("T")[0];
                    fullDate === dateStr ? weekOneArr.push(React.createElement(
                        "td",
                        { className: "today", key: Math.floor(Math.random() * 9000) + 1000 },
                        date++
                    )) : weekOneArr.push(React.createElement(
                        "td",
                        { key: Math.floor(Math.random() * 9000) + 1000 },
                        date++
                    ));
                }
            }
            return { tableCells: weekOneArr, endDate: date };
        }, _this.buildWeek = function (startDate, totalDays, weekData) {
            var weekArr = [];
            for (var i = 0; i < 7; i++) {
                if (startDate > totalDays) {
                    weekArr.push(React.createElement("td", { className: "empty", key: Math.floor(Math.random() * 9000) + 1000 }));
                } else {
                    // weekData.today.setHours(19); Daylight savings 
                    var fullDate = new Date(weekData.year, weekData.monthIndex, startDate).toISOString().split("T")[0];
                    var dateStr = weekData.today.toISOString().split("T")[0];
                    fullDate === dateStr ? weekArr.push(React.createElement(
                        "td",
                        { className: "today", key: Math.floor(Math.random() * 9000) + 1000 },
                        startDate++
                    )) : weekArr.push(React.createElement(
                        "td",
                        { key: Math.floor(Math.random() * 9000) + 1000 },
                        startDate++
                    ));
                }
            }
            return weekArr;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Month, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var year = this.state.monthOriginDate.getFullYear();
            var monthInd = this.state.monthOriginDate.getMonth();

            var weekData = {
                monthIndex: monthInd,
                year: year,
                today: new Date()
            };

            var totalDays = this.daysInMonth(weekData.monthIndex + 1, weekData.year);
            var firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

            var initialWeek = this.buildWeekOne(firstDayIndex, weekData);
            var second = this.buildWeek(initialWeek.endDate, totalDays, weekData);
            var third = this.buildWeek(initialWeek.endDate + 7, totalDays, weekData);
            var fourth = this.buildWeek(initialWeek.endDate + 14, totalDays, weekData);
            var fifth = this.buildWeek(initialWeek.endDate + 21, totalDays, weekData);

            if (initialWeek.endDate + 28 <= totalDays) {
                var sixth = this.buildWeek(initialWeek.endDate + 28, totalDays, weekData);
                this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: sixth
                });
            } else {
                this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var dayLabels = abrevDays.map(function (day) {
                return React.createElement(
                    "th",
                    { key: day },
                    day
                );
            });
            var monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            return React.createElement(
                "div",
                { className: "month" },
                React.createElement(
                    "div",
                    { className: "month-header" },
                    React.createElement(
                        "button",
                        { className: "btn", onClick: function onClick() {
                                return _this2.prevMonth();
                            } },
                        "\u2039"
                    ),
                    React.createElement(
                        "p",
                        null,
                        monthLabels[this.state.monthOriginDate.getMonth()]
                    ),
                    React.createElement(
                        "button",
                        { className: "btn", onClick: function onClick() {
                                return _this2.nextMonth();
                            } },
                        "\u203A"
                    )
                ),
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            dayLabels
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            this.state.weekOne
                        ),
                        React.createElement(
                            "tr",
                            null,
                            this.state.weekTwo
                        ),
                        React.createElement(
                            "tr",
                            null,
                            this.state.weekThree
                        ),
                        React.createElement(
                            "tr",
                            null,
                            this.state.weekFour
                        ),
                        React.createElement(
                            "tr",
                            null,
                            this.state.weekFive
                        ),
                        React.createElement(
                            "tr",
                            null,
                            this.state.weekSix
                        )
                    )
                )
            );
        }
    }]);

    return Month;
}(React.Component);

var Calendar = function (_React$Component2) {
    _inherits(Calendar, _React$Component2);

    function Calendar() {
        _classCallCheck(this, Calendar);

        return _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).apply(this, arguments));
    }

    _createClass(Calendar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "calendar-container" },
                React.createElement(
                    "div",
                    { className: "calendar" },
                    React.createElement(Month, null)
                )
            );
        }
    }]);

    return Calendar;
}(React.Component);

// const Calendar = () => {

//     return(
//         <p>test passed</p>
//     )
// };


ReactDOM.render(React.createElement(Calendar, null), document.querySelector('#calendar'));