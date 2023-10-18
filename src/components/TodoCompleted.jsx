import './../styles/components/todoCompleted.scss';
import { useContext, useState } from 'react';
import TodoList from './TodoList';
import RenderElement from '../HOC/RenderElement';
import ToolsForTodos from '../context/ToolsForTodos';

const TodoCompleted = ({ completedTodos }) => {
  const [activeCompetedTodos, setActiveCompetedTodos] = useState(false);
  const { deleteAllCompletedTodos } = useContext(ToolsForTodos)

  const clickBtnHandler = (e) => {
    deleteAllCompletedTodos();
    e.stopPropagation();
  }

  return (
    <div className='todo-completed'>
      <div
        className="todo-completed__title"
        onClick={() => setActiveCompetedTodos(prev => !prev)}
      >
        {
          activeCompetedTodos
            ? <i className="fa-solid fa-caret-down"></i>
            : <i className="fa-solid fa-caret-right"></i>
        }

        <span>Completed ({completedTodos.length})</span>
        <button
          className='todo-completed__clear'
          onClick={clickBtnHandler}
        >
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>

      <RenderElement data={activeCompetedTodos}>
        <TodoList dataTodos={completedTodos} />
      </RenderElement>

    </div>
  );
};

export default TodoCompleted;