import React from 'react';
import Form from './Form';
import Items from './Items';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }

  return list;
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const App = () => {
  const [items, setItems] = React.useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]

    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list');
  }

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id)
    setItems(filteredItems);
    setLocalStorage(filteredItems);
    toast.success('Item removed from the list');
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
  
      return item;
    })
  
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <div className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items 
        items={items} 
        removeItem={removeItem} 
        editItem={editItem}
      />
    </div>
  );
};

export default App;
