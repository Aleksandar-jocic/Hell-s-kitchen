import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MenuBar from './MenuBar/MenuBar';
import CardList from './Recipes-card-list/recipes-card-list';

import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MenuBar />, document.getElementById('menu-bar'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<CardList />, document.getElementById('card-list'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
