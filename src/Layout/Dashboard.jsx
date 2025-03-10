import { FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaStar, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    // get is admin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex min-h-screen">
            {/* dashboard side bar */}
            <div className="w-80 min-h-full bg-[#D1A054] px-4 py-4">
                <ul className="menu gap-4 text-xl">
                    {
                        isAdmin ? <>
                            <li className="">
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils />
                                    Add Items
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/dashboard/manageItems">
                                    <FaList />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/dashboard/bookings">
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/dashboard/users">
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li className="">
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart />
                                        My Cart
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/dashboard/review">
                                        <FaStar />
                                        Review
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/dashboard/bookings">
                                        <FaList />
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* Divider */}
                    <div className="divider"></div>

                    <li className="">
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/order/salad">
                            <FaSearch />
                            Menu
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/order/salad">
                            <IoIosMail />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8 mb-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;