import React from 'react';
import Card from '../Recipe-card/recipe-card';
import { recipes } from '../BazaPrivremena/Baza-recepti';
import './recipes-card-list.css'

const CardList = ( ) => {
    const cardComponents = recipes.map((user,i) =>
    {return <Card  id={recipes[i].id}
                    chef_src={recipes[i].src_chef}
                    user_name={recipes[i].name}
                    pic_src = {recipes[i].src_name}
                    />})
        return(
            <div className='card-list'>
        <div className="filter col-12 col-md-12">
            <a href="" className="col-1">Popularno</a>
        <a href="" className="col-1">Moj Omiljen</a>
        <a href="" className="col-1">Popularno</a>
        <a href="" className="col-1">Vegetarijansko</a>
        <a href="" className="col-1">Posno</a>
        </div>
                {cardComponents}
            </div>)
    }

    export default CardList;