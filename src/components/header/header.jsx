import React from 'react';
import { Link } from 'react-router-dom';
// Connect is an HOC - Higher Order Component
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

// Special syntax in React from importing SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                { currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/login">
                        LOG IN
                    </Link>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
