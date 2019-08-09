import { VisibilityFilters } from '../actions'
// how does this import work? does it import from actions/index.js?

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
// i don't understand this shit. why doesn't it return state like the other reducer (todos)?

export default visibilityFilter
