import './../styles/components/todoList.scss';
import TodoItem from './TodoItem';

const TodoList = ({ dataTodos }) => {
	return (
		<ul className="todo-list">

			{dataTodos.map((dataTodo, index) =>
				<TodoItem
					key={dataTodo.id}
					dataTodo={dataTodo}
					index={index + 1}
				/>
			)}

		</ul>
	);
};

export default TodoList;