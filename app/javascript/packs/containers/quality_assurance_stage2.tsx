import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import { recycleRobot } from '../actions/robot_actions'
import * as Stage2Helpers from '../helpers/batch_qa_stage2_helpers'

const { connect } = ReactRedux
const { robotsFrom, stage2Complete, descriptionForBadRobot } = Stage2Helpers

const QualityAssuranceStage2 = (props) => {
  const alertBar = stage2Complete(props.allRobots) ? (
    <div className='row alert-bar'>
      <div className='col-12 col-sm-6 message'>
        This stage is now complete. Proceed to shipping.
      </div>
    </div>
  ) : ''

  return (
    <div>
      { alertBar }

      <div className='row header-action'>
        <div className='col-12 col-sm-6'>
          <h2>Requires Attention</h2>
        </div>
        <div className='col-12 col-sm-6 actions'>
          <button className="btn btn-info">Recycle Robots</button>
        </div>
      </div>

      <section className="row text-center">
        {
          props.badRobots.map(robot => {
            return <Robot
              {...robot}
              key = {robot.id}
              description = { descriptionForBadRobot(robot) }
            />
          })
        }
      </section>

      <h2>Factory Seconds</h2>
      <section className="row text-center">
        {
          props.factorySeconds.map(robot => (
            <Robot
              {...robot}
              key={robot.id}
              description = "Factory second"
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
    onRecycle: (robotId) => dispatch(recycleRobot(robotId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualityAssuranceStage2)