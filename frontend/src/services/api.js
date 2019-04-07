import axios from "axios";

// A wrapper around axios API call that formats error, etc 
// @param {string} method the HTTP ver you want to use
// @param {string} path the route path / endpoint 
// @param {object} data (optional) data in JSON form for POST requests

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        console.log("Working with data: " + data)
        console.log(data)
        return axios[method.toLowerCase()](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                if (err.response.data.error) {
                    console.log(err.response.data.error);
                    return reject(err.response.data.error);
                } else {
                    return reject({"message":"Backend is not running."});
                }
            });
    });
}
