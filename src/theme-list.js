import React, { Component } from 'react';
import ThemeDetails from './theme-details.js';

class ThemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bShowDetails: false
    };
  }

  render() {
    let ownerName = (this.props.data.owner === "_default") ? "Default Theme" : this.props.data.owner;
    return (
      <div className="theme-list" onClick={this.showDetails.bind(this)}>
        <h2>{this.props.data.title}</h2>
        <h4>{ownerName}</h4>
        { this.state.bShowDetails ? ( <ThemeDetails data={this.props.data} /> ) : ( "" ) }
      </div>
    );
  }

   showDetails(event) {
    this.setState( ( prevState ) => {
      return { bShowDetails: !prevState.bShowDetails };
    })
  }
}

export default ThemeList;