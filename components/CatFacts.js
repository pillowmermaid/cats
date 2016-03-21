import React from 'react'
import CatFact from './CatFact'

const CatFacts = ({ catFacts, onRemoveFact }) => (
    
    <div className='cat-facts'>
        {catFacts.map(catFact => 
            <CatFact 
                key={catFact.id} 
                {...catFact}
                onClick={() => onRemoveFact(catFact)}
            />
        )}
    </div>
)

export default CatFacts