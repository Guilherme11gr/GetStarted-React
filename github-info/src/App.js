import React, { Component } from 'react';
import './App.css';
import SearchUser from './components/SearchUser';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchUser />
      </div>
    );
  }
}

export default App;
