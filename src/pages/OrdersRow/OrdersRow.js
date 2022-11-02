import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order }) => {
    console.log(order)
    const {serviceName, name, price, phone, service} = order;

    const [serviceOrder, setServiceOrder] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setServiceOrder(data))
    } , [service])



    return (
        <div>

            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    serviceOrder?.img &&
                                    <img src={serviceOrder?.img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <div className="text-sm opacity-50">{}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{phone}</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">{price}</button>
                </th>
            </tr>

        </div>
    );
};

export default OrdersRow;