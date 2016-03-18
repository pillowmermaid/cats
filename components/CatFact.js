import React from 'react'

const CatFact = ({  id, text, imageURL }) => (
    <div className='catFact'> 
        <div>{text}</div> <img src={imageURL}/>
    </div>
)

export default CatFact