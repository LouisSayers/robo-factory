import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import * as Helpers from '../helpers/batch_helpers'

const { connect } = ReactRedux
const { batchRobotsFrom } = Helpers

const QualityAssuranceStage1 = (props) => {
  return (
    <div>
      <h2>Requires Attention</h2>
      <section className="row text-center">
        { 
          props.badRobots.map(robot => {
            let description = robot.extinguished ? 'Extinguished' : 'On Fire and Sentient'

            return <Robot
              {...robot}
              key={robot.id}
              showAction={ !robot.extinguished }
              actionText='Extinguish'
              description= { description }
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
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualityAssuranceStage1)
