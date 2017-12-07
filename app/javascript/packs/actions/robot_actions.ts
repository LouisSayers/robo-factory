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

export function extinguishRobot(robotId) {
  return (dispatch, getState, api) => {
    dispatch(extinguishing(robotId))
    api.extinguishRobot(robotId)
      .then((response) =>{
        console.log(response)
        return dispatch(robotExtinguished(robotId))}
      ).catch((error) => {
        console.log('error...')
        console.log(error)
        dispatch(robotExtinguishFailed(robotId))\
        }
      )
  }
}
