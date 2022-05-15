import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";
import Faq from "./FaQ/FaQ"
import Contact from "./Contact/Contact"
import { SocialIcon } from 'react-social-icons';
import { BsLinkedin } from "react-icons/bs";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/categories" element={<div>Categories</div>} />
            <Route
              path="/categories/:categoryName"
              element={<div>Category details</div>}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<div>Checkout</div>} />
            <Route path="/thanks" element={<div>Thank you</div>} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
      </BrowserRouter>

      <footer className="container">
      Project by Deak Zsolt 2022&nbsp;&nbsp;&nbsp;
      <a href="https://linkedin.com/in/deak-zsolt">
      <BsLinkedin/> 
      </a>
      
      
      </footer>
    </div>
  );
}

export default App;

