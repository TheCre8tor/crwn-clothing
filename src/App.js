import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import LoginRegister from './pages/auth/loginRegister';
import { auth } from './firebase/firebase.utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    // This is an open subscription.
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={ this.state.currentUser } />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/login" component={LoginRegister} />
                </Switch>
            </div>
        );
    }
}

export default App;
