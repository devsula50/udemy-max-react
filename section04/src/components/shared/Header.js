import React from 'react'

const Header = props => {
  return (
    <header>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  )
}

export default Header
