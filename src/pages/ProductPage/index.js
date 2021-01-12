import React, { useState } from 'react';
import './styles.css';


const ProductPage = () => {
    const images = [
        'https://images-na.ssl-images-amazon.com/images/I/81DCCQDlh8L._AC_SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71QFnTd6XlL._AC_SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71o0e-aMn6L._AC_SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71950EestlL._AC_SX522_.jpg'
    ];
    const [mainImage, setMainImage] = useState(images[0]);
    
    
    return (
        <div className="productPage">
            <div className="productPage__container">
                <div className="productPage__left">
                    <img 
                        className="productPage__mainImage"
                        src={mainImage}
                        alt=""
                    />
                    <div className="productPage__thumbnailContainer">
                        {images.map((image, index) => 
                            <img 
                                key={index}
                                className="productPage__thumbnailImage"
                                src={image}
                                alt=""
                                onClick={() => setMainImage(images[index])}
                            />
                        )}
                    </div>
                </div>

                <div className="productPage__right">
                    <div className="productPage__title">Huggies Simply Clean Unscented Baby Wipes, 11 Flip-Top Packs (704 Wipes Total) </div>
                    <div className="productPage__productInfo">
                        <div className="productPage__productRating">
                            {Array(5).fill().map((_, i) => <span key={i}>&#9733;</span>)}
                        </div>
                        <div className="productPage__producPrice">
                            <small>$</small>
                            <strong>25,4</strong>
                        </div>
                        <div className="productPage__productSeller">by Wesam almasri</div>
                        <div className="productPage__productDescription">
                            About this item

                            Contains 11 flip-top packs of 64 unscented baby wipes (704 wipes total)
                            Family Wipes – Perfect for hands, faces, bottoms and everyday surfaces, providing a gentle and reliable clean for the whole family
                            Grab & Go – Whether it's the kitchen table or the playground, Huggies Simply Clean Wipes provide a reliable clean wherever you are
                            Safe for Sensitive Skin – Made with 99% triple-filtered water & pH balanced to help maintain healthy skin
                            No Harsh Ingredients – Free of lotions, fragrances, parabens, alcohol & dyes and elemental chlorine; does not contain MIT or phenoxyethanol
                            Scented & Unscented Options – Available in Fragrance Free and Fresh Scent varieties
                            Packaging may vary from image shown
                        </div>
                    </div>
                    <button type="button" className="productPage__productAddToCartBtn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;