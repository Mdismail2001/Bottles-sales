import React, { use, useState, useEffect } from 'react';
import Bottle from './Bottle';
import { addCart, getCart, deleteLs } from '../js/localstorage';
import AddToCart from './AddToCart';

const Bottles = ({bottlesPromise}) => {

    const [ cart, setCart]= useState([])

    const bottles = use(bottlesPromise)
    // console.log(bottles)

    useEffect(()=>{
        const storedCartId = getCart()
        // console.log(storedCartId, bottles)
        const storedCart = [];
        for(const id of storedCartId){
            // console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle){
                storedCart.push(cartBottle);
            }
        }
        // console.log(storedCart)
        setCart(storedCart);

    },[bottles])


    const btnHandle =(bottle) =>{
        // console.log("buy btn added" , bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)

        // save the bottle id in the local storage 
        addCart(bottle.id)
    }
    
     // add to cart delete function 
    const handleDelete =(id)=>{
        // console.log("remove " , id)
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        deleteLs(id);
    }



    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10'>Water Bottles :{bottles.length}</h1>
            <p className='text-3xl text-center font-bold mt-10' >Added to cart: {cart.length}</p>

            <AddToCart cart ={cart}
            handleDelete={handleDelete}
             ></AddToCart>
            { 

                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    btnHandle={btnHandle}

                    ></Bottle>)
            }
            
        </div>
    );
};

export default Bottles;