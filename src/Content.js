import React from 'react'
import './App.css';
import ItemsList from './ItemsList';
// import { useState } from 'react';

 function Content ({items,handleCheckBox,handleDelete}) {
    return (


    <>

    {(items.length)?(
       <ItemsList
        items={items}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
        /> 
  ):(
    <p>
    your todo list empty
    </p>
    )
  }
  </>


  );
}

export default Content