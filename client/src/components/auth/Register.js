import React,{useState,useContext} from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {registerUser} = authContext;

    const [user,setUser] = useState({
        userName : '',
        email : '',
        password : '',
        confirmPassword : '' 
    });

    const { userName,email,password,confirmPassword } = user;

    const onChangeHandler = (e) => {
        setUser({...user,[e.target.name] : e.target.value});
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(userName === '' || email === '' || password === '' || confirmPassword === ''){
            setAlert('Please enter all the fields','danger')
        }else if(password !== confirmPassword){
            setAlert('Password does not match','danger')
        }else{
            registerUser({
                userName,email,password
            })
        }
    }
    

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input type="text" name="userName" value={userName} onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChangeHandler} minLength ='6'/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChangeHandler} minLength='6'/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Register
