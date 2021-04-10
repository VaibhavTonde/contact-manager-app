import React,{useReducer} from 'react';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import authReducer from "../auth/authReducer";

import {REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR,LOGIN_SUCESS,LOGIN_FAIL,LOGOUT,CLEAR_ERRORS} from "../types";

const AuthState = (props) => {
    const initialState = {
        token : localStorage.getItem('token'),
        user : null,
        isAuthenticated : null,
        loading : true,
        error : null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Register User
    const registerUser = async (formData) => {
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users',formData,config);
            dispatch({
                type : REGISTER_SUCCESS,
                payload : res.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type : REGISTER_FAIL,
                payload : err.response.data.msg
            })
        }
    }
    

    return(
        <AuthContext.Provider value = {{
            token : state.token,
            user : state.user,
            isAuthenticated : state.isAuthenticated,
            loading : state.loading,
            error : state.error,
            registerUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState; 