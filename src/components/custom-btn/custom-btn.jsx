import React from 'react';

import './custom-btn.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    // const { isGoogleSignIn } = otherProps;
    return (
        <button className={`${ isGoogleSignIn ? "google-sign-in" : "" } custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
