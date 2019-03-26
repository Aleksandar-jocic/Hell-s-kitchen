import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './Header/Header';
import Footer from './Footer/Footer';

import IndexPage from '../src/index/indexPage';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
            <Header/>
                <Switch>
                    <Route exact path='/' component={IndexPage}/>
                </Switch>
            <Footer/>
            </div>
        )
    }
}

export default App;
