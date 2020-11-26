import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Home from './pages/home/home';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import LoginRegister from './pages/auth/loginRegister';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
    unsubscribeFromAuth = null;

    // This is an open subscription.
    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                {/* <Header currentUser={this.state.currentUser} /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/login" component={LoginRegister} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
