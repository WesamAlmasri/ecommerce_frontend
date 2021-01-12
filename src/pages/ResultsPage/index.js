import React from 'react';
import './styles.css';
import Product from '../../components/Product';
import { useParams } from 'react-router-dom';


const ResultsPage = () => {
    const { cat_id } = useParams();
    
    return (
        <div className="resulst">
            <div className="results__container">
                <div className="results__title">
                    <p className="results__titleFirstLine">Electronics</p>
                    <p className="results__titleSecondtLine">Shop home entertainment, TVs, home audio, headphones, cameras, accessories and more</p>
                </div>
                <div className="results__row">
                    <Product 
                        id={1}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
                        description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        seller="Wesam almasri"
                        rating={4}
                        price={25.99}
                    />
                    <Product 
                        id={2}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
                        description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        seller="Wesam almasri"
                        rating={4}
                        price={25.99}
                    />
                    <Product 
                        id={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
                        description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        seller="Wesam almasri"
                        rating={4}
                        price={25.99}
                    />
                    <Product 
                        id={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
                        description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        seller="Wesam almasri"
                        rating={4}
                        price={25.99}
                    />
                    <Product 
                        id={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
                        description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        seller="Wesam almasri"
                        rating={4}
                        price={25.99}
                    />
                    <Product 
                        id={6}
                        image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
                        description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        seller="Wesam almasri"
                        rating={4}
                        price={25.99}
                    />
                </div>
                <div className="results__footer">
                    <p>See more</p>
                </div>
            </div>
        </div>
    )
}


export default ResultsPage;

