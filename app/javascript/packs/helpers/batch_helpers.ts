import { stage1Complete } from './batch_qa_stage1_helpers'
import { stage2Complete } from './batch_qa_stage2_helpers'

export function batchRobotsFrom(state) {
  let { robots } = state.batch
  return Object.values(robots)
}

export function allStagesComplete(robots) {
  return stage1Complete(robots) && stage2Complete(robots)
}

export function nonExtinguished(robots) {
  return robots.filter(robot => !robot.extinguished)
}

export function factorySecondsFrom(robots) {
  const undesireableConditions = ['rusty', 'loose screws', 'paint scratched']
  return robots.filter(robot => {
    return robot.statuses.some(status => undesireableConditions.includes(status))
  })
}

export function shippableRobotsFrom(robots) {
  let eligibleRobots = nonExtinguished(robots)
  const factorySeconds = factorySecondsFrom(eligibleRobots)
  const passedQA = eligibleRobots.filter(robot => !factorySeconds.find(second => second === robot))

  return { factorySeconds, passedQA }
}
