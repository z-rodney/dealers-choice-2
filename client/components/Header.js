import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <p>Drop the Routine, Sib</p>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </nav>
    </header>
  )
}

export default Header
