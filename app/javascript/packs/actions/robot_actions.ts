import * as Constants from '../constants'

const {
  ROBOT_EXTINGUISHING,
  ROBOT_EXTINGUISHED,
  ROBOT_EXTINGUISH_FAILED
} = Constants

export function extinguishing(robotId) {
  return {
    type: ROBOT_EXTINGUISHING,
    robotId
  }
}

export function robotExtinguished(robotId) {
  return {
    type: ROBOT_EXTINGUISHED,
    robotId
  }
}

export function robotExtinguishFailed(robotId) {
  return {
    type: ROBOT_EXTINGUISH_FAILED,
    robotId
  }
}

export function extinguish(robot) {
  return (dispatch, getState, api) => {
    dispatch(extinguishing(robot.id))
  }
}
