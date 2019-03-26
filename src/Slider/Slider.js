import React from 'react';
import './Slider.css';


const Slider = () => {
    return ( <div><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
        <div class="carousel-item active">
        <img class="d-block w-100" src={require('../assets/home/slider/slider1.jpg')}/>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src={require('../assets/home/slider/slider2.jpg')}/>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src={require('../assets/home/slider/slider3.jpg')}/>
        </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={require('../assets/home/slider/slider4.jpg')}/>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={require('../assets/home/slider/slider5.jpg')}/>
    </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
        </div></div>)
};

export default Slider;
