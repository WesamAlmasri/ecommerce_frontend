import Category from '../../components/Category';
import Slideshow from '../../components/Slideshow';
import './styles.css';


const Home = () => {

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
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>


        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
        </div>

      </div>
    </div>
      
  );
}

export default Home;