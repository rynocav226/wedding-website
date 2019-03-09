import { apiCall } from "../../services/api";
// import { addError } from "./errors";
// import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actiontypes";

// export const loadMessages = messages => ({
//     type: LOAD_MESSAGES,
//     messages
// });

// export const remove = id => ({
//     type: REMOVE_MESSAGE,
//     id
// });

// export const removeMessage = (user_id, message_id) => {
//     return dispatch => {
//         return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
//             .then(() => dispatch(remove(message_id)))
//             .catch(err => dispatch(addError(err.message)));
//     };
// };

// export const fetchMessages = () => {
//     return dispatch => {
//         // return apiCall("get", "/api/messages").then(res =>
//         //     dispatch(loadMessages(res)).catch(err => addError(err.message))
//         // );

//         return apiCall("GET", "/api/messages")
//             .then(res => {
//                 console.log("get messages")
//                 dispatch(loadMessages(res));
//             })
//             .catch(err => {
//                 console.log("error getting messages")
//                 dispatch(addError(err.message));
//             });
//     };
// };

export const postSongRequests = text => (dispatch, getState) => {
    // let { currentUser } = getState();
    console.log("Post Song Requests" + text)
    // const id = "5c154d170c26da3bec966861"
    // return apiCall("post", `/api/users/${id}/songRequests`, { text })
    //     .then(res => { })
    //     .catch(console.log("Error"))
        // .catch(err => dispatch(addError(err.message)));
}
