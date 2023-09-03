import TodoItem from './TodoItem';
import './../styles/components/todoList.scss';

const TodoList = ({ todos, ...props }) => {
	return (
		<ul className="todo-list">

			{todos.map((todo, index) =>
				<TodoItem
					key={todo.id}
					dataTodo={todo}
					index={index + 1}

					{...props}
				/>
			)}

		</ul>
	);
};

export default TodoList;