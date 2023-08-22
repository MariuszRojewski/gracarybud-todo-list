import React from 'react'
import SingleItem from './SingleItem'

const Items = ({ items, removeItem, editItem }) => {
  const mapedItems = items.map((item) => {
    return(
      <SingleItem 
        key={item.id}
        item={item} 
        removeItem={removeItem}
        editItem={editItem}
      />
    )
  })

  return (
    <div>
      {mapedItems}
    </div>
  )
}

export default Items
