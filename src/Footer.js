import React from 'react'
import './App.css'

const Footer = ({leng}) => {
  return (
    <footer id='length'>{leng} List {leng>1?"items":"item"} </footer>
  )
}

export default Footer