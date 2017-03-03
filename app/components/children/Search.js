// Including React
var React = require("react");
var axios = require("axios");

// Including sub-components
var Saved = require("./Saved.js");

// The Main component (The parent)
var Search = React.createClass({
    // Describing the component's render method
    render: function() {
        return (
            <form>
                    <label>
                        Topic:
                        <input value={this.state.term} type="text" className="form-control text-center" id="term" placeholder="Search articles" onChange={this.handleChange} required />
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
                        <button type="submit" className="btn btn-success" onClick={this.handleClick}>Search</button>
                </form>
        )
    }
});
                         
        