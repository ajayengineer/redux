import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ErroPage from './components/ErrorPage';

//Login and Registration Dashboard Part
import Register from './UserDashboard/Register';

//Products Part
import ProductListing from "./Products/ProductListing";
import ProductDetails from "./Products/ProductDetails";
import ProductComponent from './Products/ProductComponent';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/productcomponent" element={<ProductComponent />} />
          <Route path="*" element={<ErroPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
