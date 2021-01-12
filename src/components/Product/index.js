import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { id, image, description, seller, rating, price } = props;
    return (
        <div className="product">
            <Link to={`/product/id=${id}`}>
                <img className="product__image" 
                    src={image}
                    alt=""
                />
            </Link>
            
            <div className="product__info">
                <div className="product__description">{description} </div>
                <div className="product__seller">by {seller}</div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <span key={i}>&#9733;</span>)}
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
