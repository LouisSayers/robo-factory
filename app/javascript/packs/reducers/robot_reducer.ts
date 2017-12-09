import * as Constants from '../constants'

const {
  ROBOT_EXTINGUISHING,
  ROBOT_EXTINGUISHED,
  ROBOT_EXTINGUISH_FAILED,
  ROBOT_ADD_TO_SHIPMENT,
  ROBOT_REMOVE_FROM_SHIPMENT,
  ROBOT_SHIPPING,
  ROBOT_SHIPPED
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
    case ROBOT_ADD_TO_SHIPMENT:
      return {
        ...state,
        add_to_shipment: true
      }
    case ROBOT_REMOVE_FROM_SHIPMENT:
      return {
        ...state,
        add_to_shipment: false
      }
    default:
      return state
  }
}

export default robotReducer
