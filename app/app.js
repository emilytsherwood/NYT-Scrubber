// Including the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Including the main parent component, holds the main layout and navigation...
var Main = require("./components/Main");

// Will render the main component, in this case, Main.js
var where = document.getElementById("app");
ReactDOM.render(
    <div>   
        <Main />
    </div>
, where);

