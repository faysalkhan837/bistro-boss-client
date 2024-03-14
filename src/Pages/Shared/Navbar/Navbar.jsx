import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from "../../../Components/Hooks/UseCart";
import UseAdmin from "../../../Components/Hooks/UseAdmin";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart()
    const [isAdmin] = UseAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const navitem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order Food</NavLink></li>
        {
            // user ? 'true' : 'false'
            // user ? condition ? 'double true' : 'one true' : 'false'
        }
        {
            user && isAdmin && <li><NavLink to="/dashbord/adminHome">Dashbord</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink to="/dashbord/userHome">Dashbord</NavLink></li>
        }

        
        {
            user ? <><button onClick={handleLogout} className="btn btn-ghost btn-sm p-3">Log Out</button></> :
                <><li><NavLink to="/login">Login</NavLink></li></>
        }
        <li><NavLink to="/dashbord/cart">
            <button className="">                
                <div className="badge badge-secondary"><FaShoppingCart></FaShoppingCart>+{cart.length}</div>
            </button>
        </NavLink></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-black bg-opacity-50 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navitem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><h1>Bistro Boss</h1></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-baseline">
                        {navitem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? user.displayName : ''
                    }
                    {
                        user ?
                            <img className="w-10 rounded-full" src={user.photoURL} alt="" /> : ""
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;