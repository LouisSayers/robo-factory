import * as BatchHelpers from '../helpers/batch_helpers'
const { batchRobotsFrom } = BatchHelpers

const nonExtinguished = (robots) => {
  return robots.filter(robot => !robot.extinguished)
}

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

const factorySecondsFrom = (robots) => {
  const undesireableConditions = ['rusty', 'loose screws', 'paint scratched']
  return robots.filter(robot => {
    return robot.statuses.some(status => undesireableConditions.includes(status))
  })
}

export function stage2Complete(robots) {
  return false
}

export function descriptionForBadRobot(robot) {
  return 'Failed QA - Ready for Recycling'
}

export function robotsFrom(state) {
  let robots = batchRobotsFrom(state)
  robots = nonExtinguished(robots)
  const badRobots = badRobotsFrom(robots)
  const otherRobots = robots.filter(robot => !badRobots.find(bad => bad === robot))

  const factorySeconds = factorySecondsFrom(otherRobots)
  const passedQA = otherRobots.filter(robot => !factorySeconds.find(second => second === robot))

  return {
    allRobots: robots,
    badRobots: badRobots,
    factorySeconds: factorySeconds,
    passedQA: passedQA
  }
}
