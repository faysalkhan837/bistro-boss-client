import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../Components/Hooks/UseCart";


const Dashbord = () => {
    const [cart] = UseCart();
    // TODO : get isAdmin data from the database
    const isadmin = true;
    return (
        <div className="flex">
            <div className=" w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to='/dashbord/userHome'>
                        <FaHome></FaHome>
                        User home
                    </NavLink></li>
                    <li><NavLink to='/dashbord/reservation'>
                        <FaCalendar></FaCalendar>
                        Reservation
                    </NavLink></li>
                    <li><NavLink to='/dashbord/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My cart({cart.length})
                    </NavLink></li>
                    <li><NavLink to='/dashbord/review'>
                        <FaAd></FaAd>
                        Add a Review
                    </NavLink></li>
                    <li><NavLink to='/dashbord/bookings'>
                        <FaList></FaList>
                        My Bookings
                    </NavLink></li>

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