import React from 'react'

import './CalcForm.css'
import CalcFromInput from "./CalcFromInput";
import ResetButton from "../shared/Button/ResetButton";
import SubmitButton from "../shared/Button/SubmitButton";

const CalcForm = () => {
  return (
    <form className="form">
      <div className={"input-group"}>
        <CalcFromInput label={"Current Savings ($)"} id={"current-savings"} />
        <CalcFromInput label={"Yearly Savings ($)"} id={"yearly-contribution"} />
      </div>
      <div className="input-group">
        <CalcFromInput label={"Expected Interest (%, per year)"} id={"expected-return"} />
        <CalcFromInput label={"Investment Duration (years)"} id={"duration"} />
      </div>
      <p className="actions">
        <ResetButton />
        <SubmitButton text={"Calculate"} />
      </p>
    </form>
  )
}

export default CalcForm