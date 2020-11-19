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
import Detail from "./components/pages/Detail";
import { ClothesProvider } from "./context/clothesContext";

const App = () => {
  return (
    <BrowserRouter>
      <ClothesProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/sale" component={Sale} />
          <Route path="/men" exact component={Men} />
          <Route path="/men/:id" component={Detail} />
          <Route path="/women" exact component={Women} />
          <Route path="/women/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </ClothesProvider>
    </BrowserRouter>
  );
};

export default App;
