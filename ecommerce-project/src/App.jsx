import './App.css'
import { CheckoutPage } from './Pages/Checkout/CheckoutPage'
import { HomePage } from './Pages/Home/HomePage'
import { OrdersPage } from './Pages/Orders/OrdersPage'
import { TrackingPage } from './Pages/Tracking/TrackingPage'
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCartItems(response.data)
    };

    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cartItems={cartItems} />} />
      <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
      <Route path="/orders" element={<OrdersPage cartItems={cartItems} />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
