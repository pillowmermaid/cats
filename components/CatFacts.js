import React from 'react'
import CatFact from './CatFact'

const CatFacts = ({ catFacts }) => (
    
    <div>
        {catFacts.map(catFact => 
            <CatFact key={catFact.id} {...catFact}/>
        )}
    </div>
)

export default CatFacts