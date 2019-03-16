import React from 'react';

const Card = ({chef_src, user_name, pic_src}) => {
    return (
        <div class = 'recipe-card'>
            <img class='recipe' src={`../assets/Jela/${pic_src}.png`} />
            <img class='chef' src={`../assets/kuvari/${chef_src}.png`} />
            <div class='recipe-name'>
                <h2>{user_name}</h2>
            </div>
        </div>
);

}
export default Card;