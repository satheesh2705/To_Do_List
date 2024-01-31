import React from 'react'

const ItemSearch = ({search,setSearch}) => {
  return (
   <form className='searchItem' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input 
        type="text" 
        id='search'
        placeholder='Search here'
        role='searchbox'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        // ={}

    />

   </form>
  )
}

export default ItemSearch