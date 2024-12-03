import { createStore } from "redux";
import cartReducer from "./cartReducer";
import { addCart,calculateTotal, removeCart } from "./actions";
const store = createStore(cartReducer)

store.subscribe(() => {
    console.log(store.getState())
})


const products = [  

    { id: 1, name: "Product A", price: 10 },  
    
    { id: 2, name: "Product B", price: 20 },  
    
    { id: 3, name: "Product C", price: 15 } 
    
    ];

    const productRender = () => {
        const productList = document.querySelector("#product-list")
        productList.innerHTML = ""
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - ${product.price}`
            const addButton = document.createElement("button")
            addButton.textContent = "Add to Cart"
            addButton.onclick = () => {
                store.dispatch(addCart(product))
                store.dispatch(calculateTotal())
            }
            li.appendChild(addButton)
            productList.appendChild(li)
        }) 
    }
    productRender()

    const updateCart = () => {
        const cartList = document.querySelector("#cart-list");
        const totalElement = document.querySelector("#total-price");
        const {cartItems, total} = store.getState()

        cartList.innerHTML = "";
        cartItems.forEach(item => {
            const li = document.createElement("li")
            li.textContent = `${item.name} - RS.${item.price} - Quantity: ${item.quantity}`
            const removeButton = document.createElement("button")
            removeButton.textContent = "Remove";
            removeButton.onclick = () => {
                store.dispatch(removeCart(item.id))
                store.dispatch(calculateTotal())
            }
            li.appendChild(removeButton)
            cartList.appendChild(li)
        })
        totalElement.textContent = `Total: RS.${total}`
    }
    
    store.subscribe(updateCart)
    updateCart()

