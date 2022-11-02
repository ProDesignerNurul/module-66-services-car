import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const CheckOut = () => {

    const { _id, title, image_url, price } = useLoaderData();

    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = {
            service : _id,
            serviceName : title,
            name : name,
            price : price,
            phone : phone,
            email : email,
            message : message
        }

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order Confirmed');
                form.reset();
            }
        })
        .catch(err => console.error(err))
        

    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl font-bold"> Order This Item : {title}</h2>
                <p className='text-2xl my-2 '>Price : <span className='text-orange-500 font-semibold'>${price}</span></p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 my-5'>
                    <input name="firstName" type="text" placeholder="Enter Your First Name" className="input input-bordered input-accent w-full" />
                    <input name="lastName" type="text" placeholder="Enter Your Last Name" className="input input-bordered input-accent w-full" />
                    <input name="phone" type="text" placeholder="Enter Your Phone" className="input input-bordered input-accent w-full" />
                    <input name="email" type="text" placeholder="Enter Your Email" defaultValue={user?.email} className="input input-bordered input-accent w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-accent w-full h-32" placeholder="Descriptions"></textarea>

                <input className='btn btn-success my-2' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;