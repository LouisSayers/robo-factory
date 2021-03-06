import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import AlertBar from '../components/alert_bar'
import BatchDetails from '../components/batch_details'
import * as BatchHelpers from '../helpers/batch_helpers'
import * as ShippingHelpers from '../helpers/shipping_helpers'
import { addToShipment, removeFromShipment, sendRobotShipment } from '../actions/robot_actions'

const { connect } = ReactRedux
const { allStagesComplete } = BatchHelpers
const { robotsFrom, shippingOrShipped, shippingDescriptionFor } = ShippingHelpers

const RobotShipping = (props) => {
  const accessDenied = (
    <AlertBar message="You must complete Quality Assurance before shipping." />
  )

  const sendShipmentButton = (
    <button onClick={ () => props.onSendShipment(props.readyToShip) } className="btn btn-info">
      Send Shipment
    </button>
  )

  const shippingContent = (
    <div>
      <h2>Factory Seconds</h2>
      <BatchDetails batchId={props.batchId} />
      <section className="row text-center">
        {
          props.factorySeconds.map(robot => (
            <Robot
              {...robot}
              key={robot.id}
              description = { shippingDescriptionFor(robot, "Factory second") }
              actionEnabled = { !shippingOrShipped(robot) }
              actionText = 'Add to Shipping'
              actionOnClick = { props.addToShipping }
              showDetails = { true }
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
              description = { shippingDescriptionFor(robot, "Passed checks") }
              actionEnabled = { !shippingOrShipped(robot) }
              actionText = 'Add to Shipping'
              actionOnClick = { props.addToShipping }
              showDetails = { true }
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
              description = { shippingDescriptionFor(robot) }
              actionEnabled = { !shippingOrShipped(robot) }
              actionText = 'Remove from Shipping'
              actionOnClick = { props.removeFromShipping }
              showDetails = { true }
            />
          ))
        }
      </section>
      <div className='col-12 text-center'>
        { props.readyToShip.length > 0 ? sendShipmentButton : '' }
      </div>
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
  let { batchId } = state.batch
  let qaComplete = allStagesComplete(robots.allRobots)
  return { ...robots, batchId, qaComplete }
}

function mapDispatchToProps (dispatch) {
  return {
    addToShipping: (robotId) => dispatch(addToShipment(robotId)),
    removeFromShipping: (robotId) => dispatch(removeFromShipment(robotId)),
    onSendShipment: (robots) => dispatch(sendRobotShipment(robots))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RobotShipping)
