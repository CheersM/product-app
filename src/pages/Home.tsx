import { FC, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import Card from '../components/Card';
import { Product } from '../models/product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Product[]>(
          'https://api.thedogapi.com/v1/breeds?limit=8&page=0',
        );
        setProducts(data);
      } catch (error) {
        alert('Error while requesting card data at the slider');
        console.error(error);
      }
    })();
  }, []);

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-block">
      <div>
        <h2>Home Page</h2>
        <Slider {...settings}>
          {products.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
