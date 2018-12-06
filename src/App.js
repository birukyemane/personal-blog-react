import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AddPost from './components/AddPost';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Personal blog</h1>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/posts/newpost' component={AddPost}/>
          </Switch>
        </div>
      </BrowserRouter>     
    );
  }
}

export default App;
