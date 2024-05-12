import React, { useState } from 'react';
import TodoRow from './TodoRow';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  {/* adding todo*/}

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodo([...todo, inputValue]);
      setInputValue('');
    }
  };

   {/* deleting todo*/}

  const deleteTodo = (index: number) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  return (
    <div className='flex flex-col items-center justify-top mt-1 h-screen overflow-y-auto'>
      <div className='w-80 max-[320px]:w-60 p-6 bg-gray-50 rounded-t-lg mt-1'>
        <div className='mb-4'>

           {/* heading */}

          <h1 className='text-3xl font-semibold mb-2'>Todo</h1>

           {/*list of todos */}

          {todo.map((todo, index) => (
            <TodoRow key={index} label={todo} onDelete={() => deleteTodo(index)} />
          ))}
        </div>
      </div>

      {/*border line for seprating list and input field */}

      <div className="w-80 max-[320px]:w-60 border-t-2 border-gray-200 p-2 bg-gray-50 rounded-b-lg">
        <div className='flex mb-1'>

           {/* input field and add button */}

          <div className='flex-grow mr-1'>
            <input
              type='text'
              placeholder='Add task here...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border-0 outline-none rounded-md py-3 px-3 w-full bg-gray-100 placeholder-gray-400 text-black"
            />
          </div>

          {/* Add button  */}

          <button onClick={addTodo} className='px-6 py-2 bg-green-600 text-white rounded-md'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
