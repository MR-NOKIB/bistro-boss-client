import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaStar, FaStarAndCrescent } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            {/* dashboard side bar */}
            <div className="w-80 min-h-full bg-[#D1A054] px-4 py-4">
                <ul className="menu gap-4 text-xl">
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