import React from 'react';

const AddToCart = ({cart, handleDelete}) => {
    // console.log(cart)
    return (
        <div className='w-11/12 mx-auto gap-5 m-5 grid grid-cols-1 md:grid-cols-5  '> 
            {
                cart.map(cartItem => <div key={cartItem.id}>
                    <img className='h-50 rounded' src={cartItem.image_url} alt="" />
                    <h1>Name: {cartItem.name}</h1>
                    <p>Price: {cartItem.price_usd}$</p>
                    <button onClick={() => handleDelete(cartItem.id)} className='bg-gray-300 p-1 rounded-full'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default AddToCart;