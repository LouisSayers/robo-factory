import * as React from 'react'

const AlertBar = ({ active = true, message }) => {
  if(active) {
    return (
      <div className='row alert-bar'>
        <div className='col-12 message'>
          { message }
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default AlertBar
