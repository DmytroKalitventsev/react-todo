import './../styles/components/todoLists.scss';
import { useContext } from 'react';
import ToolsForTodos from '../context/ToolsForTodos';
import TodoList from './TodoList';
import TodoCompleted from './TodoCompleted';
import TodosEmpty from './TodosEmpty';
import RenderElement from '../HOC/RenderElement';

const TodoLists = () => {
  const { dataTodos } = useContext(ToolsForTodos);

  const notCompletedTodos = dataTodos.filter(todo => !todo.completed);
  const completedTodos = dataTodos.filter(todo => todo.completed);

  return (
    <div
      className='todo-lists'
      style={{
        justifyContent: notCompletedTodos.length ? 'space-between' : 'flex-end',
      }}
    >

      {
        dataTodos.length
          ?
          <>
            <RenderElement data={notCompletedTodos.length}>
              <TodoList dataTodos={notCompletedTodos} />
            </RenderElement>

            <RenderElement data={completedTodos.length}>
              <TodoCompleted completedTodos={completedTodos} />
            </RenderElement>
          </>
          :
          <TodosEmpty />
      }
    </div>
  );
};

export default TodoLists;