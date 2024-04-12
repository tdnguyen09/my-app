import React, { useContext } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/NavBar';
import SignUp from './components/Signup';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartContext, CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/logout'>
            <Logout /> 
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
