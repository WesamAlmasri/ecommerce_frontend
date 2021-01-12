import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const { id, title, image } = props;
    return (
        <div className="category">
            <p className="category__title">{title}</p>
            <Link to={`/results/cat_id=${id}`}>
                <img className="category__image" 
                    src={image}
                    alt=""
                />
            </Link>
            <p className="category__footer">see more</p>
        </div>
    )
}

export default Category
