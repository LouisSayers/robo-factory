import * as BatchHelpers from '../helpers/batch_helpers'
const { allStagesComplete, batchRobotsFrom } = BatchHelpers

export function robotDataFrom(state) {
  let robots = batchRobotsFrom(state)

  return {
    allRobots: robots,
    passedQA: allStagesComplete(robots)
  }
}
