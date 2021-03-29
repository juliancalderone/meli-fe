import "./App.scss";
import ProductDetail from "./components/product-detail/ProductDetail";
import ProductsList from "./components/products-list/ProductsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layouts/app-layout/AppLayout";
import { ProductsProvider } from "./providers/products/Products";

function App() {
  return (
    <Router>
      <ProductsProvider>
        <AppLayout>
          <Switch>
            <Route path="/items/:id">
              <ProductDetail />
            </Route>
            <Route path="/items">
              <ProductsList />
            </Route>
          </Switch>
        </AppLayout>
      </ProductsProvider>
    </Router>
  );
}

export default App;
