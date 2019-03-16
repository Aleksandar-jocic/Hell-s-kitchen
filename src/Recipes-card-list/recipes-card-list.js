import React from 'react';
import Card from '../Recipe-card/recipe-card';
import { recipes } from '../BazaPrivremena/Baza-recepti';

const CardList = ( ) => {
    const cardComponents = recipes.map((user,i) =>
    {return <Card key ={i} id={recipes[i].id} chef_src={recipes[i].src_chef} user_name={recipes[i].name} pic_src = {recipes[i].src_name} />})
        return(
            <div>
            {cardComponents}
            </div>
    )

    }

    export default CardList;