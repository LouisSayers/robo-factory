import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import AlertBar from '../components/alert_bar'
import * as BatchHelpers from '../helpers/batch_helpers'
import * as ShippingHelpers from '../helpers/shipping_helpers'
import { addToShipment, removeFromShipment } from '../actions/robot_actions'

const { connect } = ReactRedux
const { allStagesComplete } = BatchHelpers
const { robotsFrom } = ShippingHelpers

const RobotShipping = (props) => {
  const accessDenied = (
    <AlertBar message="You must complete Quality Assurance before shipping." />
  )

  const shippingContent = (
    <div>
      <h2>Factory Seconds</h2>
      <section className="row text-center">
        {
          props.factorySeconds.map(robot => (
            <Robot
              {...robot}
              key={robot.id}
              description = "Factory second"
              actionEnabled = { true }
              actionText = 'Add to Shipping'
              actionOnClick = { props.addToShipping }
            />
          ))
        }
      </section>

      <h2>Passed QA</h2>
      <section className="row text-center">
        {
          props.passedQA.map(robot => (
            <Robot
              {...robot}
              key={robot.id}
              description = "Passed checks"
              actionEnabled = { true }
              actionText = 'Add to Shipping'
              actionOnClick = { props.addToShipping }
            />
          ))
        }
      </section>

      <h2>Ready to ship</h2>
      <section className="row text-center">
        {
          props.readyToShip.map(robot => (
            <Robot
              {...robot}
              key={robot.id}
              description = "Ready to ship"
              actionEnabled = { true }
              actionText = 'Remove from Shipping'
              actionOnClick = { props.removeFromShipping }
            />
          ))
        }
      </section>
    </div>
  )
  
 return (
    <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Shipping</h1>
      <hr />
      { props.qaComplete ? shippingContent : accessDenied }
    </main>
 )
}

function mapStateToProps (state) {
  let robots = robotsFrom(state)
  let qaComplete = allStagesComplete(robots.allRobots)
  return { ...robots, qaComplete }
}

function mapDispatchToProps (dispatch) {
  return {
    addToShipping: (robotId) => dispatch(addToShipment(robotId)),
    removeFromShipping: (robotId) => dispatch(removeFromShipment(robotId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RobotShipping)
