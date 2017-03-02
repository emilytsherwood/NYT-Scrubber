// Including React
var React = require("react");

// Including sub-components
var Saved = require("./Saved");

// The Main component (The parent)
var Search = React.createClass({
    // Describing the component's render method
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center"></h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label>
                                            Topic:
                                            <input type="text" className="form-control" id="searchInput" placeholder="Search articles" />
                                        </label>
                                        <br />
                                        <label>
                                            Start Year:
                                            <input type="number" className="form-control" id="startYearInput" placeholder="Start year" />
                                        </label>
                                        <br />
                                        <label>
                                            End Year:
                                            <input type="number" className="form-control" id="endYearInput" placeholder="End year" />
                                        </label>
                                        <br />
                                        <button type="button" className="btn btn-success" onClick={this.handleClick}>Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
                         
        )