import React from 'react'

import './Result.css'
import ResultTable from "./ResultTable";

const Result = props => {

  return (
    <ResultTable items={props.resultList} />
  )
}

export default Result