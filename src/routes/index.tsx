import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import ProductForm from "pages/ProductForm";
import NotFound from "pages/NotFound";
import Header from "components/Header";

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Dashboard} />

            <Route path="/product-form" exact component={ProductForm} />

            <Route path="/not-found" component={NotFound} />

            <Redirect from="*" to="/not-found" />
        </Switch>
    </BrowserRouter>
);

export default Routes;
