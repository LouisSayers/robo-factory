import * as React from 'react'
import * as ReactRedux from 'react-redux'

const { connect } = ReactRedux

const QualityAssurance = (props) => {
  let body: Element

  if(props.loading) {
    body = <p>Loading...</p>
  } else {
    body = <p>not Loading...</p>
  }

  return (
    <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Quality Assurance</h1>
      { body }
    </main>
  )
}

function mapStateToProps (state) {
  let { isFetching } = state.batch
  return { loading: isFetching }
}

function mapDispatchToProps (dispatch) {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualityAssurance)
