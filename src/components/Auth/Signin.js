import classes from './Form.module.css';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';


const Signin = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    let { email, password } = formData;

    const inputChangeHandler = (event) => {
        console.log('input change');
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(formData);
        // sessionStorage.setItem('isLoggedIn', true);
        authCtx.onSignIn(email, password);
        history.replace('/');
        setFormData({
            email: '',
            password: '',
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.content}>
                <h3>Signin to explore</h3>
                <input type='text' placeholder='username@domain.com'
                    name='email'
                    onChange={inputChangeHandler}
                    value={email}></input>
                <input type='password' placeholder='password'
                    name='password'
                    onChange={inputChangeHandler}
                    value={password}></input>
                <button type='submit'>SignIn</button>
                <div className={classes.link}>
                    <small>Don't have an account. Please signup</small>
                    <br></br>
                    <Link to='/signup' >SignUp</Link>
                </div>
            </div>
        </form>
    )
}


export default Signin;