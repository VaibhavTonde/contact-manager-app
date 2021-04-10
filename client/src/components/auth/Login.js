import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [user,setUser] = useState({
        email : '',
        password : ''
    });

    const {email,passsword } = user;

    const onChangeHandler = (e) => {
        setUser({...user,[e.target.name] : e.target.value});
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={passsword} onChange={onChangeHandler}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
            <label htmlFor="register">Not a member? <Link to="/register" >Register now</Link></label>
        </div>
    )
}

export default Login
