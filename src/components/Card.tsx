import { Fragment } from 'react';
import ContentLoader from 'react-content-loader';
import { Product } from '../models/product';

const Card = ({ item, loading }: { item: Product; loading: boolean }) => {
  return (
    <Fragment>
      {loading ? (
        <ContentLoader
          speed={2}
          width={350}
          height={475}
          viewBox="0 0 350 475"
          backgroundColor="#f3f3f3"
          foregroundColor="#d6d5d5">
          <rect x="0" y="0" rx="5" ry="5" width="350" height="360" />
          <rect x="0" y="433" rx="5" ry="5" width="350" height="35" />
          <rect x="0" y="380" rx="5" ry="5" width="136" height="35" />
        </ContentLoader>
      ) : (
        <div className="card">
          <img width={350} height={362} src={item.image.url} alt="prod" />
          <p>{item.name}</p>
          <h2>{item.bred_for}</h2>
        </div>
      )}
    </Fragment>
  );
};

export default Card;
