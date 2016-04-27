import { addImage, addFact } from '../actions'

const imgURL = 'https://thecatapi.com/api/images/get?formal=xml&results_per_page=1'
const backupIMG = 'https://c4.staticflickr.com/8/7172/6508022985_b22200ced0_z.jpg'

export const buildFact = (dispatch) => {
    fetchText('/catfacts', dispatch)
    fetchImage(imgURL, dispatch)
}

let fetchText = (url, dispatch) => {
  return fetch(url)
    .then( text =>
        !text.ok ? dispatch(addFact('Cats are cute, what more you wanna know?')) : text.json().then(json => dispatch(addFact(json.facts)))
    )
  }

let fetchImage = (url, dispatch) => {
    return fetch(url)
    .then( image =>
        !image.ok ? dispatch(addImage(backupIMG)) : dispatch(addImage(image.url))
    )
};