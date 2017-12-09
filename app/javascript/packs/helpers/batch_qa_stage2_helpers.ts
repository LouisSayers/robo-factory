import * as BatchHelpers from '../helpers/batch_helpers'
const { batchRobotsFrom, nonExtinguished, shippableRobotsFrom } = BatchHelpers

const shouldBeRecycled = (robot) => {
  const rotorCondition = config => config.numberOfRotors < 3 || config.numberOfRotors > 8
  const blueCondition = config => config.colour === 'blue'
  const wheelsAndTracksCondition = config => config.hasWheels && config.hasTracks
  const wheelsAndRustyCondition = (config, statuses) => config.hasWheels && statuses.includes('rusty')
  const sentientAndLooseScrewsCondition = (config, statuses) => config.hasSentience && statuses.includes('loose screws')
  const onFireCondition = (config, statuses) => statuses.includes('on fire')

  let conditions = [
    rotorCondition,
    blueCondition,
    wheelsAndTracksCondition,
    wheelsAndRustyCondition,
    sentientAndLooseScrewsCondition,
    onFireCondition
  ]

  return conditions.some(condition => condition(robot.configuration, robot.statuses))
}

const badRobotsFrom = (robots) => {
  return robots.filter(robot => shouldBeRecycled(robot))
}

export function stage2Complete(robots) {
  let eligibleRobots = nonExtinguished(robots)
  let badRobots = badRobotsFrom(eligibleRobots)
  return badRobots.length === 0
}

export function descriptionForBadRobot(robot) {
  return robot.recycling ? 'Recycling...'
    : 'Failed QA - Ready for Recycling'
}

export function robotsFrom(state) {
  let robots = nonExtinguished(batchRobotsFrom(state))
  const badRobots = badRobotsFrom(robots)
  const otherRobots = robots.filter(robot => !badRobots.find(bad => bad === robot))
  const shippableRobots = shippableRobotsFrom(otherRobots)
  
  return {
    ...shippableRobots,
    allRobots: robots,
    badRobots: badRobots
  }
}
