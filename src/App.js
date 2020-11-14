import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';

const HatsPage = () => (
    <div
        style={{
            margin: 0,
            padding: 0,
            backgroundColor: 'red',
            width: '100%',
            height: '2500px',
        }}
        className=""
    >
        <h1 style={{ margin: 0, padding: '3rem' }}>HATS PAGE</h1>
        <Link to="/">HOME</Link>
    </div>
);

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
