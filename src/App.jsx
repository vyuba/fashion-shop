// import { useState } from 'react'
import './App.css'
import Page from './Page'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage'
function App() {
const[cartOpen, setCartOpen] = useState(false)
const [cartItems, setCartItems] = useState([]);

const handleCartOpen = () => {
  setCartOpen(prevState => !prevState);
};

const addToCart = (item) => {
  setCartItems(prevItems => [...prevItems, item]);
  setCartOpen(true);  // Open cart when item is added
};

  return (
    <Router>
    <>
      <Navbar handleCartOpen={handleCartOpen} />
      <Cart handleCartOpen={handleCartOpen} cartOpen={cartOpen} 
          onClose={() => setCartOpen(false)}
          items={cartItems} />
      <Routes>
        <Route path="/" element={<Page handleCartOpen={handleCartOpen} cartOpen={cartOpen} />} />
        <Route path="/product/:id" element={<ProductPage handleCartOpen={handleCartOpen} addToCart={addToCart} />} />
      </Routes>
    </>
  </Router>
  )
}

export default App
