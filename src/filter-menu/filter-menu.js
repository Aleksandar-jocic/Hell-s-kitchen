import React, { Component } from 'react';
import './filter-menu.css';
import $ from 'jquery';
import Select from 'react-select';

const ingredients = [
    { value: 'čokolada', label: 'Čokolada' },
    { value: 'jagode', label: 'Jagode' },
    { value: 'krompir', label: 'Krompir' },
    { value: 'jagnjetina', label: 'Jagnjetia' },
    { value: 'šargarepa', label: 'Šargarepa' },
    { value: 'grašak', label: 'Grašak' },
    { value: 'piletina', label: 'Piletina' },
    { value: 'boranija', label: 'Boranija' },
    { value: 'paprike', label: 'Paprike' },
    { value: 'oslić', label: 'Oslić' }
];
const allergens = [
    { value: 'biber', label: 'Vegan' },
    { value: 'jagode', label: 'Vegetarijansko' },
    { value: 'čokolada', label: 'Posno' },
    { value: 'laktoza', label: 'Dijetalno' },
    { value: 'kikiriki', label: 'Raw' },
    { value: 'kukuruz', label: 'Egzotično' },
    { value: 'krastavac', label: 'Riba' },
];
const specialDiets = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarijansko', label: 'Vegetarijansko' },
    { value: 'posno', label: 'Posno' },
    { value: 'dijetalno', label: 'Dijetalno' },
    { value: 'raw', label: 'Raw' },
    { value: 'egzotično', label: 'Egzotično' },
    { value: 'riba', label: 'Riba' },
    { value: 'meso', label: 'Meso' },
];

class FilterMenu extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <div id="FilterMenu">


            <div className="dropdown-menu" id="filter-box" aria-labelledby="navbarDropdown">
            <div className = "d-flex flex-column w-100 align-items-center">
            <p>Moj Frižider</p>
            <Select
            isMulti
            value={selectedOption}
            onChange={this.handleChange}
            options={ingredients}
            />
                <p>Alergeni</p>
            <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={allergens}/>
                <p>Specijalna Ishrana</p>
        <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={specialDiets}/>
                <p>Raspon cene</p>



                <p>Vreme pripreme</p>
                <p>Nutricionističke Informacije</p>
            <a className="menu-list" href="#">Action</a>
            <a className="menu-list" href="#">Another action</a>
        <a className="menu-list" href="#">Something here</a>
        </div>
        </div>

        <div id="filterBtn" className="pr-3">
            <a className="nav-link p-0" id="menuBtnOpen" onClick={menuOpen} role="button"><i className="fas fa-filter"></i></a>
        <a className="nav-link p-0 d-none" id="menuBtnClose" onClick={menuClose} role="button"><i className="fas fa-filter"></i></a>
        </div>
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

export default FilterMenu;