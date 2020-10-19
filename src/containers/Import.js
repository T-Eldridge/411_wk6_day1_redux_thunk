// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import {fetchMakes, removeEntry} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        removeEntry: (index) => dispatch(removeEntry(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)