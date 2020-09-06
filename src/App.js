import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componenets/Home/Home';
import NoMatch from './Componenets/NoMatch/NoMatch';
import PostDetail from './Componenets/PostDetail/PostDetail';





function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
