import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product';
import Home from './components/Home';

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/" element={<Product />}>
          product
        </Route>
      </Routes>
    </>
  );
}

export default App
