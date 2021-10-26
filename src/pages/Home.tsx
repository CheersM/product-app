import { FC, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import Card from '../components/Card';
import { Product } from '../models/product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Product[]>(
          'https://api.thedogapi.com/v1/breeds?limit=8&page=0',
        );
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        alert('Error while requesting card data at the slider');
        console.error(error);
      }
    })();
  }, []);

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          {(isLoading ? [...Array(8)] : products).map((item, index) => (
            <Card item={item} key={index} loading={isLoading} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
