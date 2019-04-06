import React, { Component } from 'react';
import RecipeItem  from './RecipeItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FavoriteRecipe extends Component {

    render() {
        return (
            <div>
                <h4 className="Link"><Link to='/'>Home</Link></h4>
                <h4>Favorite Recipes </h4>
                <div> 
                    {
                        this.props.favoriteRecipe.map((recipe, index) => {
                            return (
                                <RecipeItem  
                                    key={index} 
                                    recipe={recipe} 
                                    favoriteButton={false}
                                />
                                
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favoriteRecipe: state.favoriteRecipe
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipe);