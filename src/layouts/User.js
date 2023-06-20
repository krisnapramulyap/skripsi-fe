import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const Home = lazy(() => import("../pages/main/home"));
const Product = lazy(() => import("../pages/main/product"));
// const LandingPage = lazy(() => import("../pages/landingpage"));

// components

export default function User() {
  const renderLoader = () => <p>Loading</p>;

  return (  
    <>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route path="/main/home" exact component={Home} />
          <Route path="/main/product/:id" exact component={Product} />
          {/* <Route path="/main/product/:id" exact component={Product} /> */}
          {/* <Redirect from="/main" to="/main" /> */}
        </Switch>
      </Suspense>
    </>
  );
}
