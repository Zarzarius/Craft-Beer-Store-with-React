import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Footer from "./FooterApp";
import Landing from "./Landing";
import VideoInfo from "./VideoInfo";
import Beerlist from "./BeerList";
import BeerDetail from "./BeerDeatail";
import NotFound404 from "./NotFound404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Basket from "./Basket";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/videoinfo' component={VideoInfo} />
          <Route path='/beerlist' exact component={Beerlist} />
          <Route path='/beerlist/:id' component={BeerDetail} />
          <Basket path='/basket' component={Basket} />
          <Route component={NotFound404} />
        </Switch>
        <Footer />
        {/* </AuthProvider> */}
      </Router>
    </>
  );
};

export default App;
