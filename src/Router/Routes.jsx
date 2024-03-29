import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/MyDashbord/Cart/Cart";
import AllUsers from "../Pages/MyDashbord/AllUsers/AllUsers";
import AddItems from "../Pages/MyDashbord/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/MyDashbord/ManageItems/ManageItems";
import UpdateItem from "../Pages/MyDashbord/UpdateItem/UpdateItem";
import Payment from "../Pages/MyDashbord/Payment/Payment";
import PaymentHistory from "../Pages/MyDashbord/Payment/Paymenthistory/PaymentHistori";
import UserHome from "../Pages/MyDashbord/Userhome/UserHome";
import AdminHome from "../Pages/MyDashbord/Adminhome/AdminHome";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:categori',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashbord',
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children: [
            // Normal user
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // Admin only
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
])