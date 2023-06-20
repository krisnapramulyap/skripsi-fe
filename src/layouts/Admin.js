import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const Home = lazy(() => import("../pages/admin/product"));
// const Product = lazy(() => import("../pages/admin/product"));
// const LandingPage = lazy(() => import("../pages/landingpage"));

// components

export default function Admin() {
  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route path="/admin/product" exact component={Home} />
          {/* <Route path="/admin/promo" exact component={Home} />
          <Route path="/admin/dashboard" exact component={Home} /> */}
          {/* <Redirect from="/admin" to="/admin/product" /> */}
        </Switch>
      </Suspense>
    </>
  );
}
