// File Desc: this is Recipe Item Component
import React, { Component } from 'react';

class RecipeItem extends Component {
    render () {
        let { recipe } = this.props;
        return (
            <div className="recipe-item">
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

export default RecipeItem;