import * as React from 'react'
import * as ReactRedux from 'react-redux'
import Robot from '../components/robot'
import AlertBar from '../components/alert_bar'
import * as BatchHelpers from '../helpers/batch_helpers'
import * as ShippingHelpers from '../helpers/shipping_helpers'

const { connect } = ReactRedux
const { allStagesComplete } = BatchHelpers
const { robotDataFrom } = ShippingHelpers

const RobotShipping = (props) => {
  const shippingContent = ''
  const accessDenied = (
    <AlertBar active={!allStagesComplete(props.allRobots)} message="You must complete Quality Assurance before shipping." />
  )
  
 return (
    <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Shipping</h1>
      <hr />
      { props.passedQA ? shippingContent : accessDenied }
    </main>
 )
}

function mapStateToProps (state) {
  return robotDataFrom(state)
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RobotShipping)