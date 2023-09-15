import React, { useState } from 'react'

import './CalcFormInput.css'

const CalcFormInput = props => {
  const [ enteredInput, setEnteredInput ] = useState('')

  const changeInputHandler = (event) => {
    console.log('==> CalcFormInput changeInputHandler')
    setEnteredInput(event.target.value)
  }

  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input onChange={changeInputHandler} type="number" id={props.id} />
    </p>
  )
}

export default CalcFormInput