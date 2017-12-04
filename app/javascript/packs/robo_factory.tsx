import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface HelloProps { name: string; }

const Hello = (props: HelloProps) => (
  <div>Hello {props.name}!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Robo Factory" />,
    document.body.appendChild(document.createElement('div')),
  )
})
