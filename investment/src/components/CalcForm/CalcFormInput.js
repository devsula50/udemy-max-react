import React from 'react'

import './CalcFormInput.css'

const CalcFormInput = props => {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" id={props.id} />
    </p>
  )
}

export default CalcFormInput