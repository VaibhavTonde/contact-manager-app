import {REGISTER_SUCCESS,REGISTER_FAIL, CLEAR_ERRORS, USER_LOADED, AUTH_ERROR, LOGIN_SUCESS, LOGIN_FAIL, LOGOUT } from '../types';

export default (state,action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCESS: 
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                loading : false,

            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token : null,
                loading : false,
                isAuthenticated : null,
                user : null,
                error : action.payload
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated : true,
                loading : false,
                user : action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error : null
            }
        default:
            break;
    }
}