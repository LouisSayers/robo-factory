import * as Constants from '../constants'

const {
  ROBOT_EXTINGUISHING,
  ROBOT_EXTINGUISHED,
  ROBOT_EXTINGUISH_FAILED
} = Constants

const robotReducer = (state = {}, action) => {
  switch (action.type) {
    case ROBOT_EXTINGUISHING:
      return {
        ...state,
        extinguishing: true
      }
    default:
      return state
  }
}

export default robotReducer
