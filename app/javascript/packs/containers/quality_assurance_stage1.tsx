import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import AlertBar from '../components/alert_bar'
import { extinguishRobot } from '../actions/robot_actions'
import * as Stage1Helpers from '../helpers/batch_qa_stage1_helpers'

const { connect } = ReactRedux
const { robotsFrom, stage1Complete, canBeExtinguished, descriptionForBadRobot } = Stage1Helpers

const QualityAssuranceStage1 = (props) => {
  return (
    <div>
      <AlertBar active={stage1Complete(props.allRobots)} message="This stage is now complete." />
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
  return robotsFrom(state)
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
