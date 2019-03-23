import React, { Component } from 'react';
import './header.css';
import $ from 'jquery';
import logo from "../assets/logo/logo.png"



class Header extends Component {
    render() {
        return (
            <div id="headerBar">
                <nav className="navbar navbar-expand-lg">
                    <div className = "row w-100">
                        <div className = "col-md-4">
                            <a className="navbar-brand d-flex align-items-center" href="#"><img id="logo" src={logo} height="30px"/> <span>Hells Kitchen</span></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className="input-group md-form form-sm form-2 pl-0">
                                    <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search text-grey" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pr-0">

                            </div>
            </div>
            </nav>
        </div>

    );
    }
}

function menuOpen() {

    $("#filter-box").addClass("slide-left");
    $("#filterBtn").addClass("slide-left");
    $("#menuBtnClose").removeClass("d-none");
    $("#menuBtnOpen").addClass("d-none");

    console.log("jead");
}
function menuClose() {


    $("#filter-box").removeClass("slide-left");
    $("#filterBtn").removeClass("slide-left");
    $("#menuBtnClose").addClass("d-none");
    $("#menuBtnOpen").removeClass("d-none");
}

export default Header;
