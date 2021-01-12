import Category from '../../components/Category';
import Product from '../../components/Product';
import Slideshow from '../../components/Slideshow';
import './styles.css';


const HomePage = () => {

  return (
    <div className="home">
      <div className="home__container">
        <Slideshow 
          images={['https://www.w3schools.com/howto/img_nature_wide.jpg',
                'https://www.w3schools.com/howto/img_snow_wide.jpg',
                'https://www.w3schools.com/howto/img_lights_wide.jpg'
                ]}
        />
        <div className="home__row">
          <Category 
            id={1}
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Category
            id={2}
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Category 
            id={3}
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Category
            id={4} 
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Category 
            id={5}
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Category
            id={6} 
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
        </div>

        {/* Ads */}

        <div className="home__row">
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
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL.jpg"
            description="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01) "
            seller="joco seller"
            rating={5}
            price={22}
          />
          <Product 
            id={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
            description="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            seller="Wesam almasri"
            rating={4}
            price={25.99}
          />
        </div>
      </div>
    </div>
      
  );
}

export default HomePage;