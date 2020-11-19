import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
import ShopPage from './pages/shop/shop';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
