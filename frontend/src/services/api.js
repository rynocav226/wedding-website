import axios from "axios";

// A wrapper around axios API call that formats error, etc 
// @param {string} method the HTTP ver you want to use
// @param {string} path the route path / endpoint 
// @param {object} data (optional) data in JSON form for POST requests

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        // path ="http://localhost:8081/api/users/5c154d170c26da3bec966861/songRequests"
        console.log("Working with data: " + data)
        path = "http://localhost:8080"+path
        console.log(data)
        return axios[method.toLowerCase()](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                console.log(err.response.data.error)
                return reject(err.response);
            });
    });
}
