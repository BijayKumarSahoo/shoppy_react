import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    onAddToCart: () => { },
    onRemoveFromCart: () => { }
});

export default CartContext;