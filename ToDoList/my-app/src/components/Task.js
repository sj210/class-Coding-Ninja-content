import React from 'react'

export default function Task(props) {
  return (
    <div>
      <li>
        {props.text}
      </li>
      <button onClick={() => props.onDelete(props.id)}> Delete </button>
    </div>
  )
}
