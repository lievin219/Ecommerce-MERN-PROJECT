
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory'
import Production from './Pages/Production';
import Cart from './Pages/Cart';
import Login from './Pages/Login.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import AuthProvider from "react-auth-kit"
// import createStore from 'react-auth-kit/createStore';
import men_banner from './Components/Assets/Assets/banner_mens.png'
import women_banner from './Components/Assets/Assets/banner_women.png'
import kids_banner from './Components/Assets/Assets/banner_kids.png'


function App() {
 

  return (
    
    <div>
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}/>
        <Route path='/mens' element={<Shopcategory   banner={men_banner}  category='men'/>} />
        <Route path='/womens' element={<Shopcategory banner={women_banner}   category='women'/>} />
        <Route path='/kids' element={<Shopcategory  banner={kids_banner} category='kid'/>} />
        <Route path='/product' element={<Production></Production>}>
          <Route path=':productId' element={<Production/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
     
      </Routes>
     </BrowserRouter>
     
     <Footer/>
     
        
    </div>
  );
}

export default App;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ShopContextProvider from './Context/ShopContext';
// import AuthProvider from 'react-auth-kit';
// import createStore from 'react-auth-kit/createStore';

// // Create the store for react-auth-kit
// const store = createStore({
//   authType: 'cookie',
//   authName: 'authTokenii',
//   cookieSecure: false,
//   cookieDomain: window.location.hostname,
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthProvider store={store}>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </AuthProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// reportWebVitals();
