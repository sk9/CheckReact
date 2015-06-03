var $ = require("jquery")
var React = require("react")

var App = require("./views/app.jsx")

$(function() {
    console.log('hello');
    React.render(<App />, $('.react_entry').get(0));
})
