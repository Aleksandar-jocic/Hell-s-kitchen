import React from 'react';
import './recipe-card.css';



const Card = ({id, chef_src, user_name, pic_src}) => {

    return (

        <div id={`card-no${id}`} class = 'recipe-card col-6 col-md-4 p-1' >
        <div class = 'recipe-container'>
            <img class='recipe' src={require(`../assets/Jela/${pic_src}.jpg`)} />
            <img class='chef' src={require(`../assets/kuvari/${chef_src}.png`)} />
            <div class='recipe-name text-center mr-1 p-3'>
                <h5>{user_name}</h5>
            </div>
        </div>
        </div>

);
}
export default Card;