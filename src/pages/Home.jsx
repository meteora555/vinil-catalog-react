import React from 'react';
import { Catalog } from '../components';

function Home({ items }) {
  return (
    <div>
      <Catalog items={items} />
    </div>
  );
}

export default Home;
