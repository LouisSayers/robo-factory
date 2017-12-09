import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import AlertBar from '../components/alert_bar'
import { recycleRobots } from '../actions/robot_actions'
import * as Stage1Helpers from '../helpers/batch_qa_stage1_helpers'
import * as Stage2Helpers from '../helpers/batch_qa_stage2_helpers'

const { connect } = ReactRedux
const { stage1Complete } = Stage1Helpers
const { robotsFrom, stage2Complete, descriptionForBadRobot } = Stage2Helpers

const QualityAssuranceStage2 = (props) => {
  const recycleButton = props.badRobots.length !== 0 ? (
    <button onClick={ () => props.onRecycleAll(props.badRobots) } className="btn btn-info">
      Recycle Robots
    </button>
  ) : ''

  const accessDenied = (
    <AlertBar message="Please complete the previous stage first." />
  )

  const stageContent = (
    <div>
      <AlertBar active={props.stageComplete} message="QA is now complete. Please proceed to shipping." />
      <div className='row header-action'>
        <div className='col-12 col-sm-6'>
          <h2>Requires Attention</h2>
        </div>
        <div className='col-12 col-sm-6 actions'>
          { recycleButton }
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

  return props.accessDenied ? accessDenied : stageContent
}

function mapStateToProps (state) {
  let robots = robotsFrom(state)
  return {
    ...robots,
    accessDenied: !stage1Complete(robots.allRobots),
    stageComplete: stage2Complete(robots.allRobots)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onRecycleAll: (robots) => dispatch(recycleRobots(robots))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualityAssuranceStage2)
