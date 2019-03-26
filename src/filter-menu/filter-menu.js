import React from 'react';
import './filter-menu.css';
import $ from 'jquery';
import Select from 'react-select';

const options = [
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
const options2 = [
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

    constructor(props) {
        super(props)

        this.state = {
            selectedOption: null,
        }
    }
    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    //ovo sam prebacio samo u ES6 u klasi da bude sa renderom
    menuOpen = () => {

        $("#filter-box").addClass("slide-left");
        $("#filterBtn").addClass("slide-left");
        $("#menuBtnClose").removeClass("d-none");
        $("#menuBtnOpen").addClass("d-none");
    
        console.log("jead");
    }
    menuClose = () => {

        $("#filter-box").removeClass("slide-left");
        $("#filterBtn").removeClass("slide-left");
        $("#menuBtnClose").addClass("d-none");
        $("#menuBtnOpen").removeClass("d-none");
    }
    render() {
        return (
            <div id="FilterMenu">


            <div className="dropdown-menu" id="filter-box" aria-labelledby="navbarDropdown">
            <div className = "d-flex flex-column w-100 align-items-center">
            <p>Moj Frižider</p>
            <Select
            isMulti
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
            />
                <p>Alergeni</p>
                <p>Specijalna Ishrana</p>
        <Select
        //mozda bi bilo ok da ubacis jos 1 state tipa selectedOption2 da ti ne prepisuje sastojke is prvog selecta
        isMulti
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options2}
        />
                <p>Raspon cene</p>
                <p>Broj Osoba</p>
                <p>Vreme pripreme</p>
                <p>Nutricionističke Informacije</p>
            <a className="menu-list" href="#">Action</a>
            <a className="menu-list" href="#">Another action</a>
        <a className="menu-list" href="#">Something here</a>
        </div>
        </div>

        <div id="filterBtn" className="pr-3">
            <a className="nav-link p-0" id="menuBtnOpen" onClick={this.menuOpen} role="button"><i className="fas fa-filter"></i></a>
        <a className="nav-link p-0 d-none" id="menuBtnClose" onClick={this.menuClose} role="button"><i className="fas fa-filter"></i></a>
        </div>
        </div>
    );
    }
}

export default FilterMenu;