import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            });

    }

    render(){
        if(!this.props.post){
            return <div>Loading....</div>;
        }

        return(
        <div>
            <Link to="/">{'<< Back to Index'}</Link>
            <div className="text-xs-right">
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger" > Delete Post </button>
            </div>
            <h3>{this.props.post.title}</h3>
            <h6>Categories: {this.props.post.categories}</h6>
            <p>{this.props.post.content}</p>
        </div>
        );
    }
}

function mapStateToProps(state){
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
