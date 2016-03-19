import React from 'react'
import { connect } from 'react-redux'
import { buildFact } from '../helpers/FactHelpers'
import CatList from './CatList'
import AddFact from './AddFact'

const css = require('../styles/css/bundle.css');


let App = ({dispatch}, state) => {
    for (var i = 0; i < 9; i++){
        buildFact(dispatch)
    }
    return (
        <div className = 'cat-app'>
            <AddFact />
            <CatList />
        </div>
    )
}

App = connect()(App)

export default App