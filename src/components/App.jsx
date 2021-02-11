import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Footer from "./FooterApp";
import SignUp from "./SignUp";
import Landing from "./Landing";
import VideoInfo from "./VideoInfo";
import Beerlist from "./BeerList";
import BeerDetail from "../components/BeerDeatail";
import NotFound404 from "../components/NotFound404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Navigation from "./Navigation";
import LogIn from "./LogIn";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navigation />
          <Switch>
            <PrivateRoute exact path='/' component={Landing} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/videoinfo' component={VideoInfo} />
            <Route path='/beerlist' exact component={Beerlist} />
            <Route path='/beerlist/:id' component={BeerDetail} />
            <Route component={NotFound404} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
