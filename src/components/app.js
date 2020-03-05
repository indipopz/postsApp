import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';
import RegisterForm from './auth/register_form';
import LoginForm from './auth/login_form';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
          
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </Router>
    );
  }
}
