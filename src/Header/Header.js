import React, { Component } from 'react';
import './header.css';
import $ from 'jquery';


class Header extends Component {
    render() {
        return (
            <div id="headerBar">
                <nav class="navbar navbar-expand-lg">
                    <div class = "row w-100">
                        <div class = "col-md-4">
                            <a class="navbar-brand" href="#">Navbar</a>
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
                            <div class="col-md-4 pr-0">
            <ul class="navbar-nav float-right">

        </ul>
                            </div>
        </div>
            <div class="dropdown-menu d-none" id="filter-box" aria-labelledby="navbarDropdown">
            <a class = "" onClick={menuClose}> <i class="fas fa-window-close"></i> </a>
            <div class = "d-flex flex-column w-100 align-items-center">
        <a class="menu-list" href="#">Action</a>
            <a class="menu-list" href="#">Another action</a>
        <a class="menu-list" href="#">Something else here</a>
            </div>
        </div>
                </nav>
        <div id="filterBtn" class="pr-3">
        <a class="nav-link p-0" id="menuBtn" onClick={menuOpen} role="button"><i class="fas fa-filter"></i></a>
        </div>
        </div>
    );
    }
}

function menuOpen() {
    $("#filter-box").removeClass("d-none");
    console.log("jead");
}
function menuClose() {
    $("#filter-box").addClass("d-none");
}

export default Header;
