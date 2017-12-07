import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import { extinguishRobot } from '../actions/robot_actions'
import * as Helpers from '../helpers/batch_helpers'

const { connect } = ReactRedux
const { batchRobotsFrom } = Helpers

const QualityAssuranceStage1 = (props) => {
  const descriptionForBadRobot = (robot) => {
    let description = 'On Fire and Sentient'

    if(robot.extinguishing) {
      description = 'Extinguishing...'
    } else if(robot.extinguished) {
      description = 'Extinguished'
    }

    return description
  }

  const canBeExtinguished = (robot) => {
    return !robot.extinguishing && !robot.extinguished
  }

  return (
    <div>
      <h2>Requires Attention</h2>
      <section className="row text-center">
        { 
          props.badRobots.map(robot => {
            return <Robot
              {...robot}
              key = {robot.id}
              actionEnabled = { canBeExtinguished(robot) }
              actionText = 'Extinguish'
              actionOnClick = { props.onExtinguish } 
              description = { descriptionForBadRobot(robot) }
            />
          })
        }
      </section>
      <h2>No Attention Required</h2>
      <section className="row text-center">
        {
          props.goodRobots.map(robot => (
            <Robot
              {...robot}
              key={robot.id}
              description = "Passed checks"
            />
          ))
        }
      </section>
    </div>
  )
}

function mapStateToProps (state) {
  let robots = batchRobotsFrom(state)

  let badRobots = robots.filter(robot => robot.id < 2)
  let goodRobots = robots.filter(robot => robot.id > 1)

  return {
    badRobots: badRobots,
    goodRobots: goodRobots
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onExtinguish: (robotId) => dispatch(extinguishRobot(robotId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualityAssuranceStage1)
