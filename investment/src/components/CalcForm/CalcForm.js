import React, { useState } from 'react'

import './CalcForm.css'
import CalcFormInput from "./CalcFormInput";
import ResetButton from "../shared/Button/ResetButton";
import SubmitButton from "../shared/Button/SubmitButton";
import Actions from "../shared/Actions";

const CalcForm = props => {


  const submitFormHandler = (event) => {
    console.log('=>CalcForm submitFormHandler')
    event.defaultPrevented()
  }

  return (
    <form onSubmit={submitFormHandler} className="form">
      <div className={"input-group"}>
        <CalcFormInput label={"Current Savings ($)"} id={"current-savings"} />
        <CalcFormInput label={"Yearly Savings ($)"} id={"yearly-contribution"} />
      </div>
      <div className="input-group">
        <CalcFormInput label={"Expected Interest (%, per year)"} id={"expected-return"} />
        <CalcFormInput label={"Investment Duration (years)"} id={"duration"} />
      </div>
      <Actions>
        <ResetButton />
        <SubmitButton text={"Calculate"} />
      </Actions>
    </form>
  )
}

export default CalcForm