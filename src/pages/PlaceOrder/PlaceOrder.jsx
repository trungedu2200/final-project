import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const { getTotalCartAmount, placeOrder } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/');
        }
    }, []);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handlePlaceOrder = () => {
        if (isFormValid()) {
            placeOrder(data);
            setOrderPlaced(true);
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const isFormValid = () => {
        return (
            data.firstName !== "" &&
            data.lastName !== "" &&
            data.email !== "" &&
            data.street !== "" &&
            data.city !== "" &&
            data.state !== "" &&
            data.zipcode !== "" &&
            data.country !== "" &&
            data.phone !== ""
        );
    };

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
                    </div>
                </div>
                {!orderPlaced ? (
                    <div className='payment-options'>
                        <h2>Select Payment Method</h2>
                        <div className='payment-option'>
                            <img src={assets.selector_icon} alt='' />
                            <p>COD (Cash On Delivery)</p>
                        </div>
                        <button onClick={handlePlaceOrder}>PLACE ORDER</button>
                    </div>
                ) : (
                    <div className='order-placed-message'>
                        <p>Thank you for ordering! Your order will be at your home in 30 minutes.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlaceOrder
