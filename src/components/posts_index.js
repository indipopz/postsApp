import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link, Redirect } from 'react-router-dom';

class PostsIndex extends Component {
    state = {
        redirect: false
    }
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts(){
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/'/>;
        }
        
        if(!this.props.isAuthenticated){
            return <Redirect to='/login'/>;
        }
        return this.props.posts.map((post) => {
            return(
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/"+ post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                    
                </li>
            );
        });
    }

    render(){
        return(
            <div>
                <h3>Posts</h3>
                <ul className="list-group">  
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);