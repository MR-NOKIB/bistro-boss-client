import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();
    // console.log(refetch);

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update the carts item counts
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
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
                        onClick={handleAddToCart}
                        className="btn btn-outline border-0 border-b-4 bg-slate-100 hover:bg-black text-yellow-600 shadow-2xl"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;