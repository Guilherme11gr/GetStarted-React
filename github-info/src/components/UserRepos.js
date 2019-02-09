import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserRepos extends Component {
    constructor() {
        super();
        this.state = {
            reposCount: 0,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({reposCount: props.repos.length})
    }

    render() {
       let repos = this.props.repos.map((repo, key) => {
            return (
                <div key={ key } className="thumbnail shadow-1-hover text-center mb-3 p-1">
                    <div className="caption">
                        <h3>{ repo.name }
                            <span className="badge">{ repo.stargazers_count } Stars</span>
                        </h3>
                        <p>{ repo.description }</p>
                        <p>
                            <a href={ repo.html_url }  className="btn btn-info" role="button">Repository</a>
                            <a href={ `${repo.html_url}/issues` }  className="btn btn-danger" role="button">Issues</a>
                        </p>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <h3>{ this.state.reposCount } Repositories</h3>
                { repos }
            </div>
        );
    }
}
UserRepos.propTypes = {
    repos: PropTypes.array,
}
export default UserRepos;
