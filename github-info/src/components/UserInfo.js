import React from 'react'; // Stateless component
import PropTypes from 'prop-types';
import UserRepos from './UserRepos';

const UserInfo = (props) => {
    const userInfo = props.user ?
        (
            <div className="row">
                <div className="col-md-4">
                    <img className="img-thumbnail mb-1" src={ props.user.avatar_url } alt="User thumbnail" width="210" height="210" />
                    <h2>{ props.user.login }</h2>
                    <p>{ props.user.name }</p>
                    <p>Followers: { props.user.followers } / Following: { props.user.following }</p>
                    <a href={ props.user.html_url } className="btn btn-info">View Details</a>
                </div>
                <div className="col-md-8">
                    <UserRepos repos={ props.repos } />
                </div>
            </div>
        ) : null;
    return userInfo;
}
UserInfo.propTypes = {
    user: PropTypes.object,
}
export default UserInfo;
