import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
