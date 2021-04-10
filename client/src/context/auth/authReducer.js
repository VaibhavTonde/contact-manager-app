import {REGISTER_SUCCESS,REGISTER_FAIL } from '../types';

export default (state,action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                loading : false,

            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token : null,
                loading : false,
                isAuthenticated : null,
                user : null,
                error : action.payload
            }
        default:
            break;
    }
}