import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from '../../store/auth-context'
import HeaderCartButton from "./HeaderCartButton";
import classes from './MainHeader.module.css';



const MainHeader = (props) => {

    const authCtx = useContext(AuthContext);

    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <div className={classes['right-links']}>
                    {!authCtx.isLoggedIn &&
                        <li><Link to="/signin" >Signin/Signup</Link></li>
                    }
                    {authCtx.isLoggedIn &&
                        <li><Link to="/cart" onClick={props.onToggleCart}>Cart</Link></li>
                    }
                    {authCtx.isLoggedIn &&
                        <li><NavLink to="/signout" onClick={authCtx.onSignOut} >Signout</NavLink></li>
                    }
                </div> */}
                <div className={classes['right-links']}>
                    {!authCtx.isLoggedIn &&
                        <li><Link to="/signin" >Signin/Signup</Link></li>
                    }
                    {authCtx.isLoggedIn &&
                        // <li><Link to="/cart" onClick={props.onToggleCart}>Cart</Link></li>
                        <li><HeaderCartButton onClick={props.onToggleCart} /></li>
                    }
                    {authCtx.isLoggedIn &&
                        <li><Link to="/signout" onClick={authCtx.onSignOut} >Signout</Link></li>
                    }
                </div>
            </ul>
        </nav >
    )
}

export default MainHeader;