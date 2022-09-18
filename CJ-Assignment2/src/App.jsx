import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import NoPage from './Pages/NoPage';
import Navbar from './Components/Navbar';

function App() {
  return (
   <BrowserRouter>
      <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/products" element={<Products />} />
     <Route path="/*" element={<NoPage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
