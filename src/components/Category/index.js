import React from 'react'
import './styles.css';

const Category = (props) => {
    const { title, image } = props;
    return (
        <div className="category">
            <p className="category__title">{title}</p>
            <img className="category__image" 
                src={image}
                alt=""
            />
            <p className="category__footer">see more</p>
        </div>
    )
}

export default Category
