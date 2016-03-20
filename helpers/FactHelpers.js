import { addImage, addFact } from '../actions'

//const factURL = 'http://catfacts-api.appspot.com/api/facts?number=1'
const imgURL = 'http://thecatapi.com/api/images/get?formal=xml&results_per_page=10'

export const buildFact = (dispatch) => {
    //fetchText(factURL, dispatch);
    dispatch(addFact('This is sample text'))
    fetchImage(imgURL, dispatch)
}

/* Method which (ideally) fetches and dispatches catfacts.
   -Seems to have a CORS issue on the server side-
-----------------------------------------------------------
let fetchText = (url, dispatch) => {
    return fetch(url).then(
        text => dispatch(addFact(text.statusText))
    );
};*/

let fetchImage = (url, dispatch) => {
    return fetch(url).then(
        image => dispatch(addImage(image.url))
    );
};