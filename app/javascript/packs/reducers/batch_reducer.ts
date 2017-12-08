import * as Constants from '../constants'
import robotReducer from './robot_reducer'
import robotsReducer from './robots_reducer'

const { 
  BATCH_FETCHING_DATA, 
  BATCH_FETCHING_DATA_SUCCESS, 
  BATCH_FETCHING_DATA_FAILURE 
} = Constants

const initialState = {
  robots: {},
  dataFetched: false,
  isFetching: false,
  error: false
}

const byId = (items) => {
  const reducer = (obj, item) => { obj[item.id] = item; return obj }
  return items.reduce(reducer, {})
}

const batch = (state = initialState, action) => {
  let isRobotAction = (action.type.match(/^ROBOT_/) || {}).input
  let isRobotsAction = (action.type.match(/^ROBOTS_/) || {}).input

  switch (action.type) {
    case isRobotAction:
      let robot = state.robots[action.robotId]
      let newRobots = Object.assign(state.robots, {
        [action.robotId]: robotReducer(robot, action)
      })

      return {
        ...state,
        robots: newRobots
      }
    case isRobotsAction:
      let newRobots = robotsReducer(state.robots, action)
      return {
        ...state,
        robots: newRobots
      }
    case BATCH_FETCHING_DATA:
      return {
        ...state,
        robots: {},
        isFetching: true,
        error: false
      }
    case BATCH_FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        robots: byId(action.data)
      }
    case BATCH_FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default batch
