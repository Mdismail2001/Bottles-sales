

const getCart = ()=>{
    const storedCart = localStorage.getItem('cart')
    if (storedCart){
        const storedCartJson = JSON.parse(storedCart)
        return storedCartJson;
    }
    return[];

}


const addCart = (id)=>{
    const cart = getCart();
    // cart.push(id)
    const newCart = [...cart, id];
    saveCart(newCart);

}

const saveCart = (cart)=>{
 const cartString = JSON.stringify(cart);
    localStorage.setItem( 'cart', cartString)

}


const deleteLs =(id)=>{
    // console.log(id)
    const storedCart = getCart();
    const remainingCart = storedCart.filter(storedId => storedId !== id)
    saveCart(remainingCart);

}



export{ getCart, addCart, deleteLs}