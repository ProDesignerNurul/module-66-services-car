import React, { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersRow from '../OrdersRow/OrdersRow';

const Orders = () => {

    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([]);
    // console.log(orders)

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    // console.log(orders)

    const handleDelete = id => {
        const proceed = window.confirm('are you delete this item?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        alert('data deleted successfully');
                        const remaining = orders.filter( odr => odr._id !== id)
                        setOrders(remaining);
                    }
                })
                .catch(err => console.error(err))
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'approved'})
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter( odr => odr._id !== id);
                const approving = orders.find( odr => odr._id === id);
                approving.status = 'approved';

                const newOrders = [...remaining, approving];
                setOrders(newOrders);
            }
        })
        .catch(err => console.error(err))
    }



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
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrdersRow>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Orders;


