import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Products />}/>
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
