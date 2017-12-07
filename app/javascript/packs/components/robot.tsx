import * as React from 'react'

const Robot = (props) => {
  let actionButton = props.actionEnabled ?
    <button onClick={ () => props.actionOnClick(props.id) } className="btn btn-info">{ props.actionText }</button>
    : null

  return (
    <div className="col-6 col-sm-3 robot">
      <h4>#{props.id} {props.name}</h4>
      <div className="text-muted">{props.description}</div>
      { actionButton }
    </div>
  )
}

export default Robot
