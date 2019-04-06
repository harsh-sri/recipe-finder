// File Desc: this is Recipe Item Component
import React, { Component } from 'react';
import { favoriteRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
class RecipeItem extends Component {

    constructor() {
        super();
        this.state = {
            favorited: false
        }
    } 

    markFavorite(recipe) {
        console.log('Mark Favorite: ', recipe);
        this.props.favoriteRecipe(recipe);
        this.setState({favorited:true});
    }

    render () {
        console.log('Recipe-Item this.props: ', this.props);
        let { recipe } = this.props;
        return (
            <div className="recipe-item">
                {
                    this.props.favoriteButton ?
                        (
                            this.state.favorited ?
                                <div>&#9733;</div>
                            : 
                                <div className="star" onClick={() => this.markFavorite(recipe)}>
                                    &#9734;
                                </div>
                        )
                    :
                    <div></div>
                }
                <div>
                    <a href={recipe.href}>
                        <h4 className="recipe-text">{recipe.title}</h4>
                    </a>
                </div>
                <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img"/>
            </div>
        )
    }
}

export default connect(null, {favoriteRecipe})(RecipeItem);