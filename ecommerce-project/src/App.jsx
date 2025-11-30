import './App.css'
import { CheckoutPage } from './Pages/Checkout/CheckoutPage'
import { HomePage } from './Pages/Home/HomePage'
import { OrdersPage } from './Pages/Orders/OrdersPage'
import { TrackingPage } from './Pages/Tracking/TrackingPage'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
