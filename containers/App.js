import React from 'react'
import { connect } from 'react-redux'
import { buildFact } from '../helpers/FactHelpers'
import CatList from './CatList'
import AddFact from './AddFact'

import '../styles/css/bundle.css'


let App = ({dispatch}) => {
    for (var i = 0; i < 9; i++){
        buildFact(dispatch)
    }
    return (
        <div className='catApp'>
            <AddFact />
            <CatList />
        </div>
    )
}

App = connect()(App)

export default App