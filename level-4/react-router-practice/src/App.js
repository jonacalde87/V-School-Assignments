import react from 'react';
import './App.css';
import Home from './Home';
import Products from './Products';
import {Routes, Route, Link} from "react-router-dom"
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div>
      <nav className='nav--bar'>
        <Link to="/" >Home</Link>
        <Link to="/products" >Products</Link>          
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
