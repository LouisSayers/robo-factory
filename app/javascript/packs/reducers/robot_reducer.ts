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
    case ROBOT_EXTINGUISHED:
      return {
        ...state,
        extinguishing: false,
        extinguished: true
      }
    case ROBOT_EXTINGUISH_FAILED:
      return {
        ...state,
        extinguishing: false,
        extinguished: false
      }
    default:
      return state
  }
}

export default robotReducer
