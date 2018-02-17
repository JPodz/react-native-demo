import { userConstants } from '../constants';
import mockUsers from './mock/users.json';

export const userActions = {
    getAll
};

function getAll() {

    return async (dispatch) => {
        dispatch(request());

        // API calls here...
        setTimeout(() => {
            try {
                dispatch(success(mockUsers));
            } catch (e) {
                dispatch(failure({ 'error': 'Aww, something broke! :(' }));
            }
        }, 1000);
    };

    function request() { return { type: userConstants.GET_ALL_REQUEST } }
    function success(users) { return { type: userConstants.GET_ALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_ALL_ERROR, error } }
}