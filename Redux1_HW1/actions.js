export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CALCULATE_TOTAL = 'CALCULATE_TOTAL';

export const addCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const calculateTotal = () => ({
    type: CALCULATE_TOTAL,
});
