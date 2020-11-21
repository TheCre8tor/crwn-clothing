import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-btn/custom-btn';

import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="login">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Login;
