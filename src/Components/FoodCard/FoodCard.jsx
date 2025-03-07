import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const handleAddToCart = food => {
        console.log(food);
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute right-0 mr-5 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                    onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-4 bg-slate-100 hover:bg-black text-yellow-600 shadow-2xl"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;