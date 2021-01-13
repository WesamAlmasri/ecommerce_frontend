import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const Product = (props) => {
    const { id, image, title, seller, rating, price } = props;
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return (
        <div className="product">
            <Link to={`/product/id=${id}`}>
                <img className="product__image" 
                    src={image}
                    alt=""
                />
            </Link>
            
            <div className="product__info">
                <div className="product__title">{title} </div>
                <div className="product__seller">by {seller}</div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <span key={i}>&#9733;</span>)}
                </div>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
            </div>
            <button onClick={addToCart} className="product__addToCartBtn">Add to cart</button>
        </div>
    )
}

export default Product
