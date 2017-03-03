// Including React
var React = require("react");
var Router = require("react-router");

// Including sub-components
var Search = require("./children/Search");


// The Main component (The parent)
var Main = React.createClass({

    // Describing the component's render method
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="heading-display">New York Times - Article Scrubber</h1>
                        <p className="subheading-display">Search for and save articles of interest!</p>
                    </div>

                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Search</h3>
                            </div>
                            <div className="panel-body">
                                <Search  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;