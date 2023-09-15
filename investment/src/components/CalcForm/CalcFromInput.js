import React from 'react'

import './CalcFormInput.css'

const CalcFromInput = props => {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" id={props.id} />
    </p>
  )
}

export default CalcFromInput