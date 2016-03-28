import {apiURL} from "../utils/clientServerConfiguration.jsx";

export const StudentListActionTypes = {
    FetchStudentDetails: 'FetchStudentDetails',

    AddStudentToStudentListUI: 'AddStudentToStudentListUI',
    ShowStudentDonationDetailUI: 'ShowStudentDonationDetailUI',
};

//function addStudentToStudentListUI(){
//    return {
//        type: AddStudentToStudentListUI,
//        payload: ?
//    }
//}

export function fetchPosts() {
    const request = axios({
        method: 'get',
        url: apiURL() + '/studentList',
        headers: []
    });

    // the redux-promise middleware will resolve the promise and then
    // dispatch a new Action w/ the type: the same, payload the value of the
    // promise, and status = success|error depending on the promise resolution
    return {
        type: FetchStudentDetails,
        payload: request
    };
}

