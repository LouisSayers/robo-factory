import * as BatchHelpers from '../helpers/batch_helpers'
const { batchRobotsFrom, shippableRobotsFrom} = BatchHelpers

const filterByReadyToShip = (robots, alreadyAdded) => {
  return robots.filter(robot => {
    return (typeof robot.add_to_shipment === 'undefined' && !alreadyAdded) ||
      (robot.add_to_shipment == alreadyAdded)
  })
}

export function robotsFrom(state) {
  const allRobots = batchRobotsFrom(state)
  let { factorySeconds, passedQA } = shippableRobotsFrom(allRobots)
  let readyToShip = factorySeconds.concat(passedQA)
  
  factorySeconds = filterByReadyToShip(factorySeconds, false)
  passedQA = filterByReadyToShip(passedQA, false)
  readyToShip = filterByReadyToShip(readyToShip, true)

  return { allRobots, factorySeconds, passedQA, readyToShip }
}
