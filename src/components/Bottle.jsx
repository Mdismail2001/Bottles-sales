import React from 'react';

const Bottle = ({bottle ,btnHandle}) => {

    const {name, image_url, id, color, lifetime_years, price_usd, usage, weight_kg, capacity_liters }=bottle
    // console.log(bottle)
    return (
        <div className="flex items-center justify-center h-screen gap-10 border w-5/12 mx-auto m-5">

            <img src={image_url? image_url :"Image Not Found" } alt="" />
            <div>
            <p> Name: {name}</p>
            <p>Id: {id}</p>
            <p>Color: {color}</p>
            <p>Life Time: {lifetime_years}</p>
            <p>Price: {price_usd}$</p>
            <p>Usage: {usage}</p>
            <p>Weight: {weight_kg}kg</p>
            <p>Capacity: {capacity_liters}</p>
            <button  onClick={() => btnHandle(bottle)} className='bg-gray-200 p-2 rounded-full mt-10'>Buy Now</button>
            </div>
        </div>
    );
};

export default Bottle;