import React, { Component } from 'react';
import { UserServices } from '../services/UserServices';
import PropTypes from 'prop-types';

class SearchUser extends Component {

  async handleSubmit(e) {
    e.preventDefault();
    const user = await UserServices.getByUsername(this.refs.username.value);
    this.props.updateUser(user.data);
    const repos = await UserServices.getReposByUsername(this.refs.username.value);
    this.props.updateRepos(repos.data);
  }

  render() {
    return (
      <div className="jumbotron p-4 rounded-0 rounded-bottom shadow-1 mt-2">
        <h1>Github Info</h1>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="user">Username</label>
                <input id="user" ref="username" name="user" autoComplete="off" className="form-control" type="text" />
                <button type="submit" className="btn btn-raised btn-primary mt-1">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
} 

export default SearchUser;
