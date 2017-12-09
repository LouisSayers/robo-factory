import * as BatchHelpers from '../helpers/batch_helpers'
const { batchRobotsFrom, shippableRobotsFrom} = BatchHelpers

const filterByReadyToShip = (robots, alreadyAdded) => {
  return robots.filter(robot => {
    return (typeof robot.add_to_shipment === 'undefined' && !alreadyAdded) ||
      (robot.add_to_shipment == alreadyAdded)
  })
}

export function shippingOrShipped(robot) {
  return robot.shipping || robot.shipped
}

export function shippingDescriptionFor(robot) {
  let description = ''
  if(robot.shipped) {
    description = 'Shipped'
  } else if(robot.shipping) {
    description = 'Shipping...'
  } else {
    description = 'Ready for Shipping'
  }

  return description
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
