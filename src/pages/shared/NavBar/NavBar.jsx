import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
 
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order</Link></li>
        <li><Link to={ isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>Dashboard</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <MdOutlineShoppingCart className='text-2xl' /><div className="badge badge-sm badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-outline border-0 border-b-4 bg-slate-100 hover:bg-black text-yellow-600 shadow-2xl'>Logout</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-black/30 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;