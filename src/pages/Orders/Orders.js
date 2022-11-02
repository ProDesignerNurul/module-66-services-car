import React, { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersRow from '../OrdersRow/OrdersRow';

const Orders = () => {

    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState();
    // console.log(orders)

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    console.log(orders)



    return (
        <div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map(order => <OrdersRow
                                key={order._id}
                                order={order}
                            ></OrdersRow>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Orders;


