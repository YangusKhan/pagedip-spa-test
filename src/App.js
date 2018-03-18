import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bIsLoaded: false,
      themes: []
    };
  }
  componentDidMount() {
    let url = "https://pagedip.com/api/theme";
    fetch(url, {
      headers: {
        'Authorization': "Bearer 7a76249a-6f74-4f81-8aec-30a8939ef42d",
        "Content-Type": "application/json"
      },
      method: "GET"
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      window.alert("Network response was not ok.");
      console.log(response);
    })
    .then( (jsonData) => {
      this.setState({
        bIsLoaded: true,
        themes: jsonData.rows
      })
      console.log(this.state.themes);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
