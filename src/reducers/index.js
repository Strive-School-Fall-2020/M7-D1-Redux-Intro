import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        // mickey: state.mickey,
        // strive: state.strive,
        count: state.count + 1,
      }

    default:
      return state
  }
}
