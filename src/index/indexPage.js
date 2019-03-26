import React from 'react';
//modules
import Slider from '../Slider/Slider';
import CardList from '../Recipes-card-list/recipes-card-list';

class IndexPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {

        return (

            <div>
                <Slider/>
                <CardList/>
            </div>
        )
    }
}
export default IndexPage;