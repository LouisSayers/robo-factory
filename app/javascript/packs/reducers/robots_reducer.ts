import * as Constants from '../constants'

const {
  ROBOTS_RECYCLING,
  ROBOTS_RECYCLED,
  ROBOTS_RECYCLING_FAILED,
  ROBOTS_SHIPPING,
  ROBOTS_SHIPPED,
  ROBOTS_SHIPPING_FAILED
} = Constants

const setValuesFor = (state, robotIds, callback) => {
  let updatedRobots = {...state}

  for(let robotId of robotIds) {
    let robot = updatedRobots[robotId]
    callback(robot)
  }

  return updatedRobots
}

const robotsReducer = (state = {}, action) => {
  switch (action.type) {
    case ROBOTS_RECYCLING:
      return setValuesFor(state, action.robotIds, robot => {
        robot.recycling = true
      })
    case ROBOTS_RECYCLED:
      let leftOverRobots = Object.keys(state)
        .filter(key => !action.robotIds.includes(parseInt(key)))
        .reduce((obj, key) => {
          obj[key] = {...state[key]}
          return obj
        }, {})
      return leftOverRobots
    case ROBOTS_RECYCLING_FAILED:
      return setValuesFor(state, action.robotIds, robot => {
        robot.recycling = false
      })
    case ROBOTS_SHIPPING:
      return setValuesFor(state, action.robotIds, robot => {
        robot.shipping = true
      })
    case ROBOTS_SHIPPED:
      return setValuesFor(state, action.robotIds, robot => {
        robot.shipping = false
        robot.shipped = true
        robot.add_to_shipment = false
      })
    case ROBOTS_SHIPPING_FAILED:
      return setValuesFor(state, action.robotIds, robot => {
        robot.shipping = false
      })
    default:
      return state
  }
}

export default robotsReducer
