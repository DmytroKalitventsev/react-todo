import './../styles/components/todoLists.scss';
import TodoCompleted from './TodoCompleted';
import TodoList from './TodoList';
import TodosEmpty from './TodosEmpty';

const TodoLists = ({ todos, ...props }) => {
	const getTypeTodos = (bool) => {
		return bool
			? todos.filter(todo => !todo.completed)
			: todos.filter(todo => todo.completed)
	}

	const notCompletedTodos = getTypeTodos(true);
	const completedTodos = getTypeTodos(false);

	return (
		<div className='todo-lists'>
			{
				!todos.length
					?
					<TodosEmpty />
					:
					<>
						{
							notCompletedTodos.length
								?
								<TodoList
									todos={notCompletedTodos}

									{...props}
								/>
								:
								false
						}

						{
							completedTodos.length
								?
								<TodoCompleted
									completedTodos={completedTodos}

									{...props}
								/>
								:
								false
						}
					</>
			}
		</div>
	);
};

export default TodoLists;