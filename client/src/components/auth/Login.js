import React,{useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {loginUser,clearError,error,isAuthenticated} = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }

        if(error === 'Invalid credentials'){
            setAlert(error,'danger');
            clearError();
        }
        //eslint-disable-next-line
    }, [error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        email : '',
        password : ''
    });

    const {email,password } = user;

    const onChangeHandler = (e) => {
        setUser({...user,[e.target.name] : e.target.value});
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(email === '' || password === '' ){
            setAlert('Please enter the credentials','danger')
        }else{
            loginUser({
                email,password
            })
        }
    }
    

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChangeHandler} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChangeHandler} required/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
            <label htmlFor="register">Not a member? <Link to="/register" >Register now</Link></label>
        </div>
    )
}

export default Login
