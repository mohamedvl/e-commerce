
import './App.css';
import NavBar from './componet/navbar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from "./componet/Footer/Footer"
import Shop from "./pages/Shop"
import ShopCategroy from './pages/ShopCategroy';
import Product from "./pages/Product"
import LoginSignin from "./pages/LoginSignin"
import Cart from "./pages/Cart"
import men_panner from "./componet/Assets/banner_mens.png"
import women_panner from "./componet/Assets/banner_women.png"
import kids_panner from "./componet/Assets/banner_kids.png"




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategroy panner={men_panner} categroy="men"/>}/>
    <Route path='/womens' element={<ShopCategroy panner={women_panner} categroy="women"/>}/>
    <Route path='/kids' element={<ShopCategroy panner={kids_panner} categroy="kid"/>}/>
    <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
