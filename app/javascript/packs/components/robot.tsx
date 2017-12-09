import * as React from 'react'

const Robot = (props) => {
  let actionButton = props.actionEnabled ?
    <button onClick={ () => props.actionOnClick(props.id) } className="btn btn-info">{ props.actionText }</button>
    : null
  
  let conf = props.configuration

  let robotDetails = props.showDetails ? (
    <table className="robot-details">
      <tr><td>id:</td><td>{ props.id }</td></tr>
      <tr><td>name:</td><td>{ props.name }</td></tr>
      <tr><td>hasSentience:</td><td>{ conf.hasSentience.toString() }</td></tr>
      <tr><td>hasWheels:</td><td>{ conf.hasWheels.toString() }</td></tr>
      <tr><td>hasTracks:</td><td>{ conf.hasTracks.toString() }</td></tr>
      <tr><td>numberOfRotors:</td><td>{ conf.numberOfRotors }</td></tr>
      <tr><td>colour:</td><td>{ conf.colour }</td></tr>
    </table>
  ) : null

  return (
    <div className="col-6 col-sm-4 robot">
      <h4>#{props.id} {props.name}</h4>
      <div className="text-muted">{props.description}</div>
      { robotDetails }
      { actionButton }
    </div>
  )
}

export default Robot
