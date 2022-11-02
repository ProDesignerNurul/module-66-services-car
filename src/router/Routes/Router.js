import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../layouts/Main/Main";
import CheckOut from "../../pages/home/CheckOut/CheckOut";
import Home from "../../pages/home/Home/Home";
import Orders from "../../pages/Orders/Orders";
import OrdersRow from "../../pages/OrdersRow/OrdersRow";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path: '/ordersrow',
                element: <OrdersRow></OrdersRow>
            }
        ]
    }
]);

export default router;