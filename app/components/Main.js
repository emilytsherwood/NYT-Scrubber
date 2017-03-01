// Including React
var React = require("react");

// Including sub-components
var Search = require("./Search");

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
                                <form>
                                    <div className="form-group">
                                        <label>
                                            Topic:
                                            <input type="text" className="form-control" id="searchInput" placeholder="Search articles" />
                                        </label>
                                        <label>
                                            Start Year:
                                            <input type="number" className="form-control" id="startYearInput" placeholder="Start year" />
                                        </label>
                                        <label>
                                            End Year:
                                            <input type="number" className="form-control" id="endYearInput" placeholder="End year" />
                                        </label>
                                        <button type="button" className="btn btn-success" onClick={this.handleClick}>Search</button>

              </div>
                </div>
            </div>
        )
    }
})

module.exports = Main;