import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
