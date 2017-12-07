import * as BatchHelpers from '../helpers/batch_helpers'
const { batchRobotsFrom } = BatchHelpers

const badRobotsFrom = (robots) => {
  return robots.filter(robot => {
    let onFire = robot.statuses.find(val => val === 'on fire')
    let hasSentience = robot.configuration.hasSentience

    return hasSentience && onFire
  })
}

export function allExtinguished(robots) {
  return robots.every(robot => robot.extinguished)
}

export function robotsFrom(state) {
  let robots = batchRobotsFrom(state)
  let badRobots = badRobotsFrom(robots)
  let goodRobots = robots.filter(robot => !badRobots.find(bad => bad === robot))

  return {
    badRobots: badRobots,
    goodRobots: goodRobots
  }
}

export function descriptionForBadRobot(robot) {
  let description = 'On Fire and Sentient'

  if(robot.extinguishing) {
    description = 'Extinguishing...'
  } else if(robot.extinguished) {
    description = 'Extinguished'
  }

  return description
}

export function canBeExtinguished(robot) {
  return !robot.extinguishing && !robot.extinguished
}
