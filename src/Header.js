import React from 'react'
import './App.css'

const Header = ({title}) => {
  return (
   <header className='header'>
    <h1>{title}</h1>
   </header>
  )
}
Header.defaultProps = {
  title:"To DO List"
}
export default Header