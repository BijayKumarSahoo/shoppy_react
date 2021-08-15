import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './Form.module.css';


const Signup = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    let { name, email, password } = formData;

    const inputChangeHandler = (event) => {
        // console.log('input change');
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // console.log(formData);
        authCtx.onSignUp();
        history.replace('/');
        setFormData({
            name: '',
            email: '',
            password: '',
        })
    }

    return (
        <form className={classes} onSubmit={submitHandler}>
            <div className={classes.content}>
                <h3>Please fill out your personal details</h3>
                <input type='text' placeholder='Enter your name'
                    name='name'
                    onChange={inputChangeHandler}
                    value={name}></input>
                <input type='text' placeholder='username@domain.com'
                    name='email'
                    onChange={inputChangeHandler}
                    value={email}></input>
                <input type='password' placeholder='password'
                    name='password'
                    onChange={inputChangeHandler}
                    value={password}></input>
                <button type='submit'>Signup</button>
                <div className={classes.link}>
                    <small>Already have an account. Plese signin</small>
                    <br />
                    <Link to='/signin' onClick={props.showSignin}>Signin</Link>
                </div>
            </div>
        </form>
    )
}


export default Signup;