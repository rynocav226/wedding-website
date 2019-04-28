import axios from "axios";

// A wrapper around axios API call that formats error, etc 
// @param {string} method the HTTP ver you want to use
// @param {string} path the route path / endpoint 
// @param {object} data (optional) data in JSON form for POST requests

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                if (err.response.data.error) {
                    return reject(err.response.data.error);
                } else {
                    return reject({"message":"Backend is not running."});
                }
            });
    });
}
