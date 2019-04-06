import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import component
import App from './components/App';
import FavoriteRecipe from './components/FavoriteRecipe'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import { favoriteRecipe } from './actions';

const store = createStore(rootReducer);
store.subscribe(() =>  console.log('store', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/favorites' component={FavoriteRecipe}/>
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));