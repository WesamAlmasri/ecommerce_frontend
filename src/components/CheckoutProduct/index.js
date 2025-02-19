import React from 'react'
import './styles.css';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = (props) => {
    const { id, image, title, price, rating } = props;
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        });
    }

    return (
        <div className="checkoutProduct">
            <img 
                className="checkoutProduct__image"
                src={image}
                alt=""
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => <span key={i}>&#9733;</span>)}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
