import authApi from "../api/authApi";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                ...action.data,

            }
        default:
            return state;
    }
}
export const setUserData = (id, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email}
    }
}

//thunk
export const getAuth = () => (dispatch) =>{
    authApi.getAuth().then(data => {
            dispatch (setUserData(data.data.id, data.data.login, data.data.email));
    });
}
export default authReducer;