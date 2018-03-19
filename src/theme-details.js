import React, { Component } from 'react';

class ThemeDetails extends Component {
    render() {
        let themeSrc = "https://pagedip.com/theme/" + this.props.data.owner + "/" + this.props.data.handle;
        return (
            <div className="theme-details">
                <h3>{ this.props.data.description }</h3>
                <h4>{ this.props.data.handle }</h4>
                <h4><em>Created on: </em>{ this.props.data.created }</h4>
                <h4><em>Last updated: </em>{ this.props.data.last_updated }</h4>
                <h4><em>GUID: </em>{ this.props.data.guid }</h4>
                <iframe src={ themeSrc }/>
            </div>
        );
    }
}

export default ThemeDetails;