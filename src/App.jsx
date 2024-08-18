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

const handleCartOpen = () => {
  setCartOpen(prevState => !prevState);
  console.log('clicked', cartOpen)

};
  return (
    <Router>
    <>
      <Navbar />
      <Cart handleCartOpen={handleCartOpen} cartOpen={cartOpen} />
      
      <Routes>
        <Route path="/" element={<Page handleCartOpen={handleCartOpen} cartOpen={cartOpen} />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  </Router>
  )
}

export default App
