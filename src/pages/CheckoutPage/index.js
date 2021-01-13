import React from 'react';
import './styles.css';
import Subtotal from '../../components/Subtotal';


const CheckoutPage = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://www.bluecorona.com/wp-content/uploads/2017/03/Consideration-Facebook-ads-1024x171.png"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}


export default CheckoutPage;