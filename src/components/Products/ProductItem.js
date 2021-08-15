import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card"
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        cartCtx.onAddToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1,
        })
    }
    return (
        <Card>
            <img src="images/prod_dummy.jpg" alt="prod_dummy" style={{ width: "100%" }} />
            <h1>{props.name}</h1>
            <p className={classes.price}>₹{props.price}</p>
            <p>{props.details}</p>
            <button className={classes.btn} onClick={addToCartHandler}>Add to Cart</button>
        </Card>
    )
}

export default ProductItem;