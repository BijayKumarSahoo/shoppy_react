import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';



const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0);

    const cartClasses = `${btnIsHighlighted ? classes.bump : ''}`;

    const location = useLocation();

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <Link to={{ pathname: '/cart', background: location }} className={cartClasses} onClick={props.onClick}>
            <span>
                <i className="fas fa-cart-plus"></i>
            </span>
            <span >{numberOfCartItems}</span>
        </Link>
    );
};

export default HeaderCartButton;