import React from 'react'
import { connect } from 'react-redux'
import { buildFact } from '../helpers/FactHelpers'

let AddFact = ({ dispatch }) => {
  return (
    <div>
        <button id='addCatBtn' className='btn' onClick={() => buildFact(dispatch)}>
          Add a cat
        </button>
    </div>
  )
}
AddFact = connect()(AddFact)

export default AddFact
