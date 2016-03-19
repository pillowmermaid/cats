import { addImage, addFact } from '../actions'

//const factURL = 'http://catfacts-api.appspot.com/api/facts?number=10'
const imgURL = 'http://thecatapi.com/api/images/get?formal=xml&results_per_page=10'

export const buildFact = (dispatch) => {
    dispatch(addFact('This is sample text'))
    fetchImage(imgURL, dispatch)
}

let fetchImage = (url, dispatch) => {
    return fetch(url).then(
        image => dispatch(addImage(image.url))
    );
};