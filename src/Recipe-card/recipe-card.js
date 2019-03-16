import React from 'react';

const Card = ({chef_src, user_name, pic_src}) => {
    return (
        <div class = 'recipe-card'>
            <img class='recipe' src={require(`../assets/Jela/${pic_src}.jpg`)} />
            <img class='chef' src={require(`../assets/kuvari/${chef_src}.png`)} />
            <div class='recipe-name'>
                <h2>{user_name}</h2>
            </div>
        </div>
);

}
export default Card;