import React from 'react'

const CatFact = ({  id, text, imageURL, onClick}) => (
    <div className='cat-fact' onClick={onClick}> 
        <div className='fact-text'>{text}</div> <img src={imageURL}/>
    </div>
)

export default CatFact