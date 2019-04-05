import React,  { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel,  Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import { setRecipes } from '../actions/index';

import { request } from '../services/NetworkService';

class SearchRecipes extends Component {

    constructor () {
        super();
        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search () {
        let { ingredients, dish } = this.state;
        const URL = 'http://www.json-generator.com/api/json/get/cgkFlyLYVu?indent=2';
        let params = {
            method: 'GET'
        };
        
        request (URL, params)
        .then(response => response.json())
        .then(json => {
            console.log('Using Network Service: ', json);
            this.props.setRecipes(json.results);
        })  
        .catch(err => console.log('err: ', err));
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormLabel> Ingredients </FormLabel>
                    {' '}
                    <FormControl type="text" placeholder="garlic, chicken" onChange = {event => this.setState({ingredients: event.target.value})} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {' '}
                    <FormControl typ="text" placeholder="adobo" onChange = {event => this.setState({dish: event.target.value})} />
                </FormGroup>
                {' '}
                <Button onClick = {()=>{this.search()}}>Submit</Button>
            </Form>
        );
    }

}

export default connect(null, {setRecipes})(SearchRecipes);