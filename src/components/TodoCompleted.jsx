import { useState } from 'react';
import './../styles/components/todoCompleted.scss';
import TodoList from './TodoList';

const TodoCompleted = ({ completedTodos, ...props }) => {
	const [showingTodos, setShowingTodos] = useState(s => !s);

	return (
		<div className='todo-completed'>
			<div
				className="todo-completed__title"
				onClick={() => setShowingTodos(!showingTodos)}
			>
				{
					!showingTodos
						?
						<i className="fa-solid fa-caret-down"></i>
						:
						<i className="fa-solid fa-caret-right"></i>
				}

				<span>Completed ({completedTodos.length})</span>
			</div>

			{
				!showingTodos
					?
					<TodoList
						todos={completedTodos}

						{...props}
					/>
					:
					false
			}

		</div>
	);
};

export default TodoCompleted;