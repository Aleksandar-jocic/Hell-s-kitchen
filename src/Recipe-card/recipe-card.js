import React from 'react';
import './recipe-card.css';



const Card = ({id, chef_src, user_name, pic_src}) => {

    return (<div id={`card-no${id}`}
                className='recipe-card col-6 col-md-3 p-1'>
                    <img className='chef' src={require(`../assets/kuvari/${chef_src}.png`)} />
                <div
                    className = 'recipe-container'>
                        <div className="recipe-href">
                    <img
                        className='recipe'
                        src={require(`../assets/Jela/${pic_src}.jpg`)} />

                    <div className='recipe-name text-center mr-1 p-3'>
                        <h5>{user_name}</h5>
                    </div>
        </div>

                </div>
            </div>
);
}
export default Card;