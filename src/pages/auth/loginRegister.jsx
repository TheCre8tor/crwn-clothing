import React from 'react';
import Login from '../../components/login/login';
import SignUp from '../../components/sign-up/sign-up';

import './loginRegister.scss';

const LoginRegister = () => {
    return (
        <div className="signin-signup">
            <Login />
            <SignUp />
        </div>
    );
};

export default LoginRegister;
