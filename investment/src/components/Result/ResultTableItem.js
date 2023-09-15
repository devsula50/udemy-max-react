import React from 'react'

import './ResultTableItem.css'

const ResultTableItem = props => {
  const { year, totalSavings, interest, totalInterest, investedCapital } = props.item
  return (
    <tr>
      <td>{year}</td>
      <td>{totalSavings}</td>
      <td>{interest}</td>
      <td>{totalInterest}</td>
      <td>{investedCapital}</td>
    </tr>
  )
}

export default ResultTableItem