let nextFactId = 0,
    nextImageId= 0;
export const addFact = (text) => {
    return {
        type: 'ADD_FACT',
        id: nextFactId++,
        text
    }
}
export const addImage = (imgURL) => {
    return {
        type: 'ADD_IMAGE',
        id: nextImageId++,
        imgURL
    }
}
export const removeFact = (id, text, image) => {
    return {
        type: 'REMOVE_FACT',
        id,
        text,
        image
    }
}