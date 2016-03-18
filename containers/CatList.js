import { connect } from 'react-redux'
import CatFacts from '../components/CatFacts'


const mapStateToProps = (state) => {
    return{
        catFacts: state.catFacts
    }
}

const CatList = connect(
    mapStateToProps
)(CatFacts)

export default CatList