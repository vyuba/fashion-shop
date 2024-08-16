// import { useState } from 'react'
import './App.css'
import Page from './Page'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { useState } from 'react'
function App() {
const[cartOpen, setCartOpen] = useState(false)

const handleCartOpen = () => {
  setCartOpen(prevState => !prevState);
  console.log('clicked', cartOpen)

};
  return (
    <>
    <Navbar/>
    <Page handleCartOpen={handleCartOpen} cartOpen={cartOpen} />
    <Cart handleCartOpen={handleCartOpen} cartOpen={cartOpen} />
    </>
  )
}

export default App
