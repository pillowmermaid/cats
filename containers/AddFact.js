import React from 'react'
import { connect } from 'react-redux'
import { buildFact } from '../helpers/FactHelpers'

let AddFact = ({ dispatch }) => {
  return (
    <div>
        <div onClick={() => buildFact(dispatch)}>
          Add a cat
        </div>
    </div>
  )
}
AddFact = connect()(AddFact)

export default AddFact
