
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Order from './pages/Order';
import Register from './pages/Register';
import AddBook from './pages/AddBook';
import { Toaster } from 'react-hot-toast';
import OneOrder from './pages/OneOrder';
function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/order/:id" element={<OneOrder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
