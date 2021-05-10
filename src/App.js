import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
// import Services from "./pages/Services/Services";
import Products from "./pages/Products/Product";
import Contact from "./pages/Contacts/Contact";
import SignUp from "./pages/SignUp/SignUp";
import { Footer } from "./components";
import Scroll from "./components/Scroll";
import Login from "./pages/Login/Login";
import MyAccount from "./pages/MyAccount/MyAccount";
import Cart from "./pages/Cart/Cart";
import Restaurant from "./pages/Restaurants/Restaurant";
// import MainContent from "./components/mainContent";
// import FormSignup from "./FormSignUp";

function App() {
  return (
    <Router>
      
      <GlobalStyle />
      <Scroll />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/cart" component={Cart} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contact} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      {/* <MainContent /> */}
      <Footer />
    </Router>
  );
}

export default App;
