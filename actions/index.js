let nextFactId = 0; 
export const addFact = (text) => {
    return {
        type: 'ADD_FACT',
        id: nextFactId++,
        text
    }
}
export const addImage = (id, imgURL) => {
    return {
        type: 'ADD_IMAGE',
        id,
        imgURL
    }
}