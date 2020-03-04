import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import { loginUser } from '../../actions/index';
import { Link } from 'react-router';

class loginForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props){
        this.props.loginUser(props)
            .then(() => {
                this.context.router.push('/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { fields: { email, password }, handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Login</h3>
                <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
                    <label>Email</label>
                    <input type="text" className="form-control" {...email} />
                    <div className="text-help">
                        {email.touched ? email.error : ''}
                    </div>
                </div>
                <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
                    <label>Password</label>
                    <input type="password" className="form-control" {...password} />
                    <div className="text-help">
                        {password.touched ? password.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    if(!values.email){
        errors.email = 'Email can not be empty';
    }
    if(!values.password){
        errors.password = 'Password can not be empty';
    }

    return errors;
}

export default reduxForm({
    form: 'RegisterForm',
    fields: ['email', 'password'],
    validate
}, null, { loginUser })(loginForm);