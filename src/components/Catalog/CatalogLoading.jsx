import React from 'react';
import ContentLoader from 'react-content-loader';

//Компонент для показа загрузки пока получаем данные с сервера
function CatalogLoading() {
  return (
    <ContentLoader
      speed={3}
      width={280}
      height={385}
      viewBox="0 0 280 385"
      backgroundColor="#f3f3f3"
      foregroundColor="#f5a3a3">
      <rect x="0" y="208" rx="0" ry="0" width="280" height="20" />
      <rect x="0" y="238" rx="0" ry="0" width="280" height="20" />
      <rect x="0" y="267" rx="4" ry="4" width="280" height="35" />
      <rect x="0" y="0" rx="0" ry="0" width="311" height="200" />
      <rect x="175" y="105" rx="0" ry="0" width="2" height="40" />
      <rect x="0" y="315" rx="5" ry="5" width="100" height="30" />
      <rect x="135" y="315" rx="13" ry="13" width="139" height="30" />
    </ContentLoader>
  );
}

export default CatalogLoading;
