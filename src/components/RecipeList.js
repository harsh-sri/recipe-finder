import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  RecipeItem  from './RecipeItem';

class RecipeList extends Component {
    render () {
        console.log('this.props', this.props);
        return (
            <div>
                <h4 className="Link"><Link to='/favorites'>Favorite Recipes</Link></h4>
                {this.props.recipes.map((recipe, index) => {
                    return (
                        <RecipeItem 
                            key={index} 
                            recipe={recipe}
                            favoriteButton={true}
                        />
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);