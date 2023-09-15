import React from 'react'

import './Header.css'

const Header = props => {
  return (
    <header className="header">
      <img imgSrc={props.logo} alt={props.alt} />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header