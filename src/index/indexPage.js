import React from 'react';
//modules
import Slider from '../Slider/Slider';
import CardList from '../Recipes-card-list/recipes-card-list';
import FilterMenu from '../filter-menu/filter-menu';

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
                <FilterMenu/>
            </div>
        )
    }
}
export default IndexPage;