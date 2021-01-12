import React from 'react'
import './styles.css';

const Product = (props) => {
    const { image, description, seller, rating, price } = props;
    return (
        <div className="product">
            <img className="product__image" 
                src={image}
                alt=""
            />
            <div className="product__info">
                <div className="product__description">{description} </div>
                <div className="product__seller">by {seller}</div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <span>&#9733;</span>)}
                </div>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
            </div>
            <button type="button" className="product__addToCartBtn">Add to cart</button>
        </div>
    )
}

export default Product
