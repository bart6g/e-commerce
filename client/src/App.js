import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Sale from "./components/pages/Sale";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/sale" component={Sale} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
