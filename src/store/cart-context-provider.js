import CartContext from "./cart-context";
import { useReducer } from "react";



//#region Reducer function
const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;

        const existingCartItemIndex = state.items.findIndex(i => i.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedCartItems;

        if (existingCartItem) {
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
            }
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        } else {
            updatedCartItems = state.items.concat(action.item);
        }

        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(i => i.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedCartItems;

        if (existingCartItem.quantity === 1) {
            updatedCartItems = state.items.filter(i => i.id !== action.id);
        } else {
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        }

        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}
//#endregion

//#region CartContextProvider function
const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    return (
        <CartContext.Provider value={{
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            onAddToCart: addToCartHandler,
            onRemoveFromCart: removeFromCartHandler
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
//#endregion

export default CartContextProvider;