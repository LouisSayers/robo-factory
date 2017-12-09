import * as Constants from '../constants'

const {
  ROBOT_EXTINGUISHING,
  ROBOT_EXTINGUISHED,
  ROBOT_EXTINGUISH_FAILED,
  ROBOTS_RECYCLING,
  ROBOTS_RECYCLED,
  ROBOTS_RECYCLING_FAILED,
  ROBOTS_SHIPPING,
  ROBOTS_SHIPPED,
  ROBOTS_SHIPPING_FAILED,
  ROBOT_ADD_TO_SHIPMENT,
  ROBOT_REMOVE_FROM_SHIPMENT
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
      .then((response) => dispatch(robotExtinguished(robotId)))
      .catch((error) => dispatch(robotExtinguishFailed(robotId)))
  }
}

export function robotRecycling(robotIds) {
  return {
    type: ROBOTS_RECYCLING,
    robotIds
  }
}

export function robotsRecycled(robotIds) {
  return {
    type: ROBOTS_RECYCLED,
    robotIds
  }
}

export function robotRecyclingFailed(robotIds) {
  return {
    type: ROBOTS_RECYCLING_FAILED,
    robotIds
  }
}

export function recycleRobots(robots) {
  const robotIds = robots.map(robot => robot.id)

  return (dispatch, getState, api) => {
    dispatch(robotRecycling(robotIds))
    api.recycleRobots(robotIds)
      .then((response) => dispatch(robotsRecycled(robotIds)))
      .catch((error) => dispatch(robotRecyclingFailed(robotIds)))
  }
}

export function addToShipment(robotId) {
  return {
    type: ROBOT_ADD_TO_SHIPMENT,
    robotId
  }
}

export function removeFromShipment(robotId) {
  return {
    type: ROBOT_REMOVE_FROM_SHIPMENT,
    robotId
  }
}

export function robotsShipping(robotIds) {
  return {
    type: ROBOTS_SHIPPING,
    robotIds
  }
}

export function robotsShipped(robotIds) {
  return {
    type: ROBOTS_SHIPPED,
    robotIds
  }
}

export function robotShippingFailed(robotIds) {
  return {
    type: ROBOTS_SHIPPING_FAILED,
    robotIds
  }
}

export function sendRobotShipment(robots) {
  const robotIds = robots.map(robot => robot.id)

  return (dispatch, getState, api) => {
    dispatch(robotsShipping(robotIds))
    api.shipRobots(robotIds)
      .then((response) => dispatch(robotsShipped(robotIds)))
      .catch((error) => dispatch(robotShippingFailed(robotIds))
    )
  }
}
