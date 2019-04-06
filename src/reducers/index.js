import { combineReducers } from 'redux';

import { SET_RECIPES, FAVORITE_RECIPE } from '../actions/index';

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default: 
            return state;
    }
} 

function favoriteRecipe(state = [], action ) {
    switch (action.type) {
        case FAVORITE_RECIPE:
            state = [...state, action.recipe];
            return state;
        default: 
            return state;

    }
}
const rootReducer = combineReducers({recipes, favoriteRecipe});

export default rootReducer;