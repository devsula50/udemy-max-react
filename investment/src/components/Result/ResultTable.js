import React from 'react'

import './ResultTable.css'
import ResultTableItem from "./ResultTableItem";

const ResultTable = props => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map(item => (
            <ResultTableItem item={item} />
          ))
        }
      </tbody>
    </table>
  )
}

export default ResultTable