import React from 'react';
import Form from './Form';
import Items from './Items';
import { nanoid } from 'nanoid';

const App = () => {
  const [items, setItems] = React.useState([]);
  console.log(items)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }

    setItems([...items, newItem]);
  }

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id)
    setItems(filteredItems);
  }

  return (
    <div className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </div>
  );
};

export default App;
