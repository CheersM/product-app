import Card from '../components/Card';
import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../models/product';

const Products: FC = () => {
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
        alert('Error while requesting card data');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="product-block">
      <h2>Product Page</h2>
      <div className="product-block__card">
        {(isLoading ? [...Array(8)] : products).map((item, index) => (
          <Card item={item} key={index} loading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default Products;
