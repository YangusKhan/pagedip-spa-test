import React, { Component } from 'react';
import ThemeList from './theme-list.js';
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
      // The pagedip api endpoint here has Access-Control-Allow-Origin set to "*",
      // so we don't need to include additional CORS headers in the request.
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
    });
  }

  render() {
    if (this.state.bIsLoaded) {
      return (
        <ul>
        { this.state.themes.map((theme) => 
          <ThemeList key={theme.guid} data={theme}/>
        )}
        </ul>
      );
    } else {
      return <h1>Loading themes...</h1>;
    }
  }
}

export default App;
