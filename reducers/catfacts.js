const catFact = (state, action) => {
    switch (action.type) {
        case 'ADD_FACT':
            return {
                id: action.id,
                text: action.text,
                imageURL: action.imgURL
            }
        case 'ADD_IMAGE':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                imageURL: action.imgURL
            })
        default: 
            return state
    }
}

const catFacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FACT':
            return [
                ...state,
                catFact(undefined, action)
            ]
        case 'ADD_IMAGE':
            return state.map(i =>
                catFact(i, action)
            )
        default: 
            return state
    }
}


export default catFacts