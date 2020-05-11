import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation} from "react-router-dom";
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';
import RegisterForm from './auth/register_form';
import LoginForm from './auth/login_form';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: null,
      isAuthenticated: false
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let localUserId = localStorage.getItem('userId');
    if(localUserId){
      this.setState({ userId: localUserId, isAuthenticated: true });
    }
  }

  logout() {
    this.setState({ userId: null, isAuthenticated: false });
    localStorage.removeItem('userId');
  }

  render() {
    const isAuthenticated = this.state.isAuthenticated;

    return (
      <Router>
        <div className="btn-group text-xs-right">
            {
              isAuthenticated 
              ? <div>
                  <Link to="/posts/new" className="btn btn-primary" > Add a Post </Link>
                  <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                </div>
              : <div>
                  <Link to="/register" className="btn btn-primary" > Register </Link>
                  <Link to="/login" className="btn btn-primary" > Login </Link>
                </div>
            }
        </div>
        <Switch>
          {/* Protected routes */}
          <Route 
              exact path="/"
              render={(props) => <PostsIndex {...props} isAuthenticated={isAuthenticated} />}
          />
          <Route 
              path="/posts/new"
              render={(props) => <PostsNew {...props} isAuthenticated={isAuthenticated} />}
          />
          <Route 
              path='/posts/:id'
              render={(props) => <PostsShow {...props} isAuthenticated={isAuthenticated} />}
          />
          
          {/* Public routes */}
          <Route 
            path='/register'
            render={(props) => <RegisterForm {...props} isAuthenticated={isAuthenticated} />}
          />
          
          <Route 
            path='/login'
            render={(props) => <LoginForm {...props} isAuthenticated={isAuthenticated} />}
          />
        </Switch>
      </Router>
    );
  }
}