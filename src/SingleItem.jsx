import React from 'react'

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className='single-item'>
      <input 
        type='checkbox' 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{item.name}</p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default SingleItem
