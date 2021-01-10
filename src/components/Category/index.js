import React from 'react'
import './styles.css';

const Category = () => {
    return (
        <div className="category">
            <p className="category__title">Electronics</p>
            <img className="category__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                alt=""
            />
            <p className="category__footer">see more</p>
        </div>
    )
}

export default Category
