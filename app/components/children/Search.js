// Including React
var React = require("react");

// Including sub-components
var Saved = require("./children/Saved");

// The Main component (The parent)
var Search = React.createClass({
    // Describing the component's render method
    render: function() {
        return (
            <form>
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
                        <button type="button" className="btn btn-success" onClick={this.handleClick}>Search</button>
                </form>
        )
    }
});
                         
        