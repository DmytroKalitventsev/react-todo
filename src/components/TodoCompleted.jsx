import './../styles/components/todoCompleted.scss';
import { useState } from 'react';
import TodoList from './TodoList';

const TodoCompleted = ({ completedTodos }) => {
	const [activeCompetedTodos, setActiveCompetedTodos] = useState(false);

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
			</div>

			{
				activeCompetedTodos
					? <TodoList dataTodos={completedTodos} />
					: false
			}

		</div>
	);
};

export default TodoCompleted;