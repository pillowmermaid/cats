import React from 'react'

const bgGet = (imgURL) => {
    return {backgroundImage: 'url('+imgURL+')'}
}

const CatFact = ({  text, imageURL, onClick}) => (
        <div className='cat-fact' onClick={onClick} style={bgGet(imageURL)}> 
            <div className="fact-text-container">
                <div className='fact-text'>{text}</div>
            </div>
        </div>
)

export default CatFact