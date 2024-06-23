
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory'
import Production from './Pages/Production';
import Cart from './Pages/Cart';
import Login from './Pages/Login.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}/>
        <Route path='/mens' element={<Shopcategory category='mens'/>} />
        <Route path='/womens' element={<Shopcategory category='womens'/>} />
        <Route path='/kids' element={<Shopcategory category='kids'/>} />
        <Route path='/product' element={<Production></Production>}>
          <Route path=':productId' element={<Production/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
