import axios from 'axios';

export class UserServices {
    static getByUsername(username) {
        return axios.get(`https://api.github.com/users/${username}`);
    }

    static getReposByUsername(username) {
        return axios.get(`https://api.github.com/users/${username}/repos`);
    }
}