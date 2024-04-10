
import './App.css';
import {Routes, Route} from 'react-router-dom'

//components
import Home from '../src/pages/home/HomePage';
import ProductListingPage from './pages/plp/ProductListingPage';
import ProductDetailsPage from './pages/pdp/ProductDetailsPage';
import Header from '../src/components/header/Header.jsx'
import Footer from '../src/components/footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<ProductListingPage/>}></Route>
        <Route path='/products_deatils' element={<ProductDetailsPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
