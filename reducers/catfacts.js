const catFact = (state, action) => {
    switch (action.type) {
        case 'ADD_FACT':{
            return {
                id: action.id,
                text: action.text,
                imageURL: action.imgURL
            }
        }
        case 'ADD_IMAGE':{
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                imageURL: action.imgURL
            })
        }
        default:{
            return state
        }
    }
}

const catFacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FACT':{
            return [
                ...state,
                catFact(undefined, action)
            ]
        }
        case 'ADD_IMAGE':{
            return state.map(i =>
                catFact(i, action)
            )
        }
        case 'REMOVE_FACT':{
            let findMe = {id:action.id, text:action.text, imageURL:action.image }
            let index = state.findIndex(x => JSON.stringify(x)===JSON.stringify(findMe))
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        }
        default:{
            return state
        }
    }
}

export default catFacts