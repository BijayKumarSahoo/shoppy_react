import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemAddHandler = (item) => {
        cartCtx.onAddToCart({ ...item, quantity: 1 })
    };

    const cartItemRemoveHandler = (id) => {
        cartCtx.onRemoveFromCart(id);
    };

    return (
        <Modal onToggle={props.onToggleCart} onAdd={cartCtx.onAddToCart} onRemove={cartCtx.onRemoveFromCart}>
            <ul className={classes['cart-items']}>
                {cartCtx.items.map(item =>
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    ></CartItem>)}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onToggleCart}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}

export default Cart;