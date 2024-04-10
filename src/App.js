
import './App.css';
import {Routes, Route} from 'react-router-dom'

//components
import Home from '../src/pages/home/HomePage';
import ProductListingPage from './pages/plp/ProductListingPage';
import ProductDetailsPage from './pages/pdp/ProductDetailsPage';
import PageNotFound from './components/404/PageNotFound.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<ProductListingPage/>}></Route>
        <Route path='/products_details' element={<ProductDetailsPage/>}></Route>
        <Route path='*' Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
