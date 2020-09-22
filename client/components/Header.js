import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <p>Drop the Routine, Sib</p>
      <nav>
        <h1>
          <Link to='/'>Home</Link>
        </h1>
        <h1>
          <Link to='/products'>Products</Link>
        </h1>
      </nav>
    </header>
  )
}

export default Header
