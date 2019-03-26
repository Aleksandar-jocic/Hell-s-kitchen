import React, { Component } from 'react';
import './header.css';
import logo from "../assets/logo/logo.png"

class Header extends Component {
    render() {
        return (
            <div id="headerBar">
                <nav class="navbar navbar-expand-lg">
                    <div class = "row w-100">
                        <div class = "col-md-4">
                            <a class="navbar-brand d-flex align-items-center" href="#"><img id="logo" src={logo} height="30px"/> <span>Hells Kitchen</span></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            </div>
                        </div>
                        <div class = "col-md-4">
                            <div class="input-group md-form form-sm form-2 pl-0">
                                <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
                                <div class="input-group-append">
                                    <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pr-0 userInfo">
                            <i class="fas fa-user-circle"></i>
                            <span>Aleksandar</span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;