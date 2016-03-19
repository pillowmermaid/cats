import { connect } from 'react-redux'
import { addFact, removeFact } from '../actions'
import CatFacts from '../components/CatFacts'


const mapStateToProps = (state) => {
    return{
        catFacts: state.catFacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFact: (child) => {
            dispatch(removeFact(child.id, child.text, child.imageURL))
        },
        onAddFact: () => {
            dispatch(addFact())
        }
    }
}

const CatList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatFacts)

export default CatList