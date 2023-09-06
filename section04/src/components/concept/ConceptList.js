import React from 'react'

import ConceptItem from './ConceptItem'

const ConceptList = props => {
  return (
    <ul id="concepts">
      {props.items.map(concept => {
        <ConceptItem concept={concept} />
      })}
    </ul>
  )
}

export default ConceptList
