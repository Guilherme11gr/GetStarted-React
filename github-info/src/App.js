import React, { Component } from 'react';
import './App.css';
import SearchUser from './components/SearchUser';
import UserInfo from './components/UserInfo';

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: null,
      repos: [],
    }
  }

  updateUser(user) { // Essa função sera necessaria , para ir até o SearchUser e setar o estado daqui com o user.data de lá .
    this.setState({ user: user });
  }

  updateRepos(user) {
    this.setState({ repos: user });
  }
  render() {
    return (
      <div className="container">
        <SearchUser updateUser={ this.updateUser.bind(this) } updateRepos={ this.updateRepos.bind(this) } />
        <UserInfo user={ this.state.user } repos={ this.state.repos } />
      </div>
    );
  }
}

export default App;
