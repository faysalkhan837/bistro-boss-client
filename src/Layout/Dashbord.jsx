import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../Components/Hooks/UseCart";
import UseAdmin from "../Components/Hooks/UseAdmin";


const Dashbord = () => {
    const [cart] = UseCart();
    const [isadmin] = UseAdmin();
    return (
        <div className="flex">
            <div className=" w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isadmin ? <>
                            <li><NavLink to='/dashbord/adminHome'>
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink></li>
                            <li><NavLink to='/dashbord/addItems'>
                                <FaUtensils></FaUtensils>
                                Add Items
                            </NavLink></li>
                            <li><NavLink to='/dashbord/manageItems'>
                                <FaList></FaList>
                                Manage Items
                            </NavLink></li>
                            <li><NavLink to='/dashbord/bookings'>
                                <FaAd></FaAd>
                                Manage Booking
                            </NavLink></li>
                            <li><NavLink to='/dashbord/users'>
                                <FaUsers></FaUsers>
                                All Users
                            </NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to='/dashbord/userHome'>
                                    <FaHome></FaHome>
                                    User home
                                </NavLink></li>
                                <li><NavLink to='/dashbord/history'>
                                    <FaCalendar></FaCalendar>
                                    History
                                </NavLink></li>
                                <li><NavLink to='/dashbord/cart'>
                                    <FaShoppingCart></FaShoppingCart>
                                    My cart({cart.length})
                                </NavLink></li>
                                <li><NavLink to='/dashbord/review'>
                                    <FaAd></FaAd>
                                    Add a Review
                                </NavLink></li>
                                <li><NavLink to='/dashbord/paymentHistory'>
                                    <FaList></FaList>
                                   Real Payment History
                                </NavLink></li>
                            </>
                    }

                    <div className="divider">OR</div>
                    {/* shared nav link */}

                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home
                    </NavLink></li>
                    <li><NavLink to='/order/salad'>
                        <FaSearch></FaSearch>
                        Menu
                    </NavLink></li>
                    <li><NavLink to='/contact'>
                        <FaEnvelope></FaEnvelope>
                        Contact
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;