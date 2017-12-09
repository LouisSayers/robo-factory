import * as Constants from '../constants'

const {
  ROBOTS_RECYCLING,
  ROBOTS_RECYCLED,
  ROBOTS_RECYCLING_FAILED,
  ROBOTS_SHIPPING,
  ROBOTS_SHIPPED,
  ROBOTS_SHIPPING_FAILED
} = Constants

const robotsReducer = (state = {}, action) => {
  let updatedRobots = {}

  switch (action.type) {
    case ROBOTS_RECYCLING:
      updatedRobots = {...state}

      for(let robotId of action.robotIds) {
        let robot = updatedRobots[robotId]
        robot.recycling = true
      }

      return updatedRobots
    case ROBOTS_RECYCLED:
      let leftOverRobots = Object.keys(state)
        .filter(key => !action.robotIds.includes(parseInt(key)))
        .reduce((obj, key) => {
          obj[key] = {...state[key]}
          return obj
        }, {})
      return leftOverRobots
    case ROBOTS_RECYCLING_FAILED:
      updatedRobots = {...state}

      for(let robotId of action.robotIds) {
        let robot = updatedRobots[robotId]
        robot.recycling = false
      }

      return updatedRobots
    case ROBOTS_SHIPPING:
      updatedRobots = {...state}

      for(let robotId of action.robotIds) {
        let robot = updatedRobots[robotId]
        robot.shipping = true
      }

      return updatedRobots
    case ROBOTS_SHIPPED:
      updatedRobots = {...state}

      for(let robotId of action.robotIds) {
        let robot = updatedRobots[robotId]
        robot.shipping = false
        robot.shipped = true
      }

      return updatedRobots
    case ROBOTS_SHIPPING_FAILED:
      updatedRobots = {...state}

      for(let robotId of action.robotIds) {
        let robot = updatedRobots[robotId]
        robot.shipping = false
      }

      return updatedRobots
    default:
      return state
  }
}

export default robotsReducer
