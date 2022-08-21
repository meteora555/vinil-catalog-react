import { Route, Routes } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import { Header, Footer } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  const [vinils, setVinils] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setVinils(data.vinils);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home items={vinils} />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
