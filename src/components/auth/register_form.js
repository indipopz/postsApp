import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import { registerUser } from '../../actions/index';
import { Link, Redirect } from 'react-router-dom';

class RegisterForm extends Component {
    state = {
        redirect: false
    }

    onSubmit(props){
        this.props.registerUser(props)
            .then(() => {
                this.setState({ redirect: true });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/'/>;
        }

        if(this.props.isAuthenticated){
            return <Redirect to='/'/>;
        }

        const { fields: { email, password }, handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Register</h3>
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
}, null, { registerUser })(RegisterForm);