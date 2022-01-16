import React from "react";

import HomePage from "./page/home/Home";
import ListBuy from "./page/list_buyer/ListBuy";

import FormLoginRegister from "./page/form/FormLoginRegister";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>

      <Router>
        <div className="menu-header">
          <div className="logo">
            <a href="/"><p>PNT</p></a>
          </div>
          <div className="login">
            <Link to='list-buyer'>
              <p>danh sach mua</p>
            </Link>

            <Link to='login'>
              <p>Đăng nhập</p>
            </Link>
            
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route  path="/list-buyer">
            <ListBuy />
          </Route>
          <Route path="/login">
            <FormLoginRegister />
          </Route>

          <Route path="/404">
            <NotFound />
          </Route>

          <Route exact path="*">
            <Redirect from="/" to="/404" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
