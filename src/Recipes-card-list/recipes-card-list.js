import React from 'react';
import Card from '../Recipe-card/recipe-card';
import { recipes } from '../BazaPrivremena/Baza-recepti';
import './recipes-card-list.css'

const CardList = ( ) => {
    const cardComponents = recipes.map((user,i) =>
    {return <Card  id={recipes[i].id} chef_src={recipes[i].src_chef} user_name={recipes[i].name} pic_src = {recipes[i].src_name}/>})
        return(
            <div class='card-list'>
            {cardComponents}
            </div>
    )

    }

    export default CardList;