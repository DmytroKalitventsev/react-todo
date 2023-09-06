import './../styles/components/todoLists.scss';
import TodoList from './TodoList';
import TodosEmpty from './TodosEmpty';

const TodoLists = ({ todos, ...props }) => {
	const getTodos = (bool) => {
		return bool
			? todos.filter(todo => !todo.completed)
			: todos.filter(todo => todo.completed)
	}

	return (
		<div className='todo-lists'>
			{
				!todos.length
					?
					<TodosEmpty />
					:
					<>
						{
							getTodos(true).length
								?
								<TodoList
									todos={getTodos(true)}

									{...props}
								/>
								:
								false
						}


						{
							getTodos(false).length
								?
								<TodoList
									todos={getTodos(false)}

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