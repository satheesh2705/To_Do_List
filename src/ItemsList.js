import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const ItemsList = ({items,handleCheckBox,handleDelete}) => {
  return (
    <ul className='main'>
    {items.map((item) =>(
      <li className='items' key={item.id}>
        <input 
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheckBox(item.id)}
         />

         <label 
        style={(item.checked) ? null:{
          textDecoration:'line-through'
        } }


         onDoubleClick={() => handleCheckBox(item.id)}
         >{item.item}</label>
        <FaTrashAlt 
          size="1.8em"
          color='red'
           onClick={() => handleDelete(item.id)}
        />

       
      </li>
    ))}
  </ul>
  )
}

export default ItemsList