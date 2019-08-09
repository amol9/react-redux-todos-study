import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
// what is this visibilityFilter thing? is it part of the state? or is this a call to the reducer function?

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,    // 
  mapDispatchToProps  //
)(Link)
// i don't see usage of the Link component in the project, why is it there?
