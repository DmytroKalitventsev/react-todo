import './../styles/components/todoCreator.scss';
import { useRef, useState } from 'react';

const TodoCreator = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const addDataTodo = () => {
    if (!value.trim()) {
      inputRef.current.style.border = '2px solid red';
      return;
    };

    addTodo(value);
    setValue('');
  }

  return (
    <div className="todo-creator">

      <input
        onChange={e => {
          inputRef.current.style.border = null;
          setValue(e.target.value)
        }}
        value={value}
        className="todo-creator__text"
        type="text"
        placeholder='add new task here...'
        name='create'
        ref={inputRef}
      />

      <button onClick={addDataTodo} className="todo-creator__create">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoCreator;