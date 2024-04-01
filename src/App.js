import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/NavBar';
import SignUp from './components/Signup';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
