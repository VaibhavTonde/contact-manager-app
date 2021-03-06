import React,{useReducer} from 'react';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import authReducer from "../auth/authReducer";

import setAuthToken from '../../utils/setAuthToken';

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

            loadUser();
        } catch (err) {
            dispatch({
                type : REGISTER_FAIL,
                payload : err.response.data.msg
            })
        }
    }

    //Load User
    const loadUser = async () => {
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type : USER_LOADED,
                payload : res.data
            })
        } catch (error) {
            dispatch({
                type : AUTH_ERROR               
            })
        }
    }

    //Login User
    const loginUser = async (formData) => {
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/auth',formData,config);
            dispatch({
                type : LOGIN_SUCESS,
                payload : res.data
            })

            loadUser();
        } catch (err) {
            dispatch({
                type : LOGIN_FAIL,
                payload : err.response.data.msg
            })
        }
    }

    //Logout User
     const logoutUser = () => {
        dispatch({type : LOGOUT});
    }

    //Clear error
    const clearError = () => {
        dispatch({type : CLEAR_ERRORS});
    }

    return(
        <AuthContext.Provider value = {{
            token : state.token,
            user : state.user,
            isAuthenticated : state.isAuthenticated,
            loading : state.loading,
            error : state.error,
            registerUser,
            clearError,
            loadUser,
            loginUser,
            logoutUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState; 