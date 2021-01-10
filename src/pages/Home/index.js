import Slideshow from '../../components/Slideshow';
import './styles.css';


const Home = () => {
  const images = ['https://www.w3schools.com/howto/img_nature_wide.jpg',
                  'https://www.w3schools.com/howto/img_snow_wide.jpg',
                   'https://www.w3schools.com/howto/img_lights_wide.jpg'
                  ]
  

  return (
    <div className="home">
      <div className="home__container">
        <Slideshow 
          images={['https://www.w3schools.com/howto/img_nature_wide.jpg',
                'https://www.w3schools.com/howto/img_snow_wide.jpg',
                'https://www.w3schools.com/howto/img_lights_wide.jpg'
                ]}
        />
      </div>
    </div>
      
  );
}

export default Home;