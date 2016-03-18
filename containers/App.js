import React from 'react'
import { connect } from 'react-redux'
import { addImage, addFact } from '../actions'
import CatList from '../containers/CatList'

//const factURL = 'http://catfacts-api.appspot.com/api/facts?number=10'
const imgURL = 'http://thecatapi.com/api/images/get?formal=xml&results_per_page=10'
const css = require('../styles/css/bundle.css');

let fetchImage = (id, url, dispatch) => {
    return fetch(url).then(
        image => dispatch(addImage(id, image.url))
    );
};

let App = ({dispatch}) => {
    for (var i = 0; i < 10; i++){
        dispatch(addFact('text'));
        fetchImage(i, imgURL, dispatch)
    }
    return (
        <div className = 'catApp'>
            <CatList />
        </div>
    )
}

App = connect()(App)

export default App