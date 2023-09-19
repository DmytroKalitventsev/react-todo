import './../styles/components/todoItem.scss';
import { useState } from 'react';
import TodoTask from './TodoTask';
import TodoAction from './TodoAction';

const TodoItem = ({ dataTodo, index }) => {
	const { title, completed, changing } = dataTodo;
	const [value, setValue] = useState(title);

	return (
		<li className={`todo-item ${completed ? 'todo-item_complete' : ''} ${changing ? 'todo-item_changing' : ''}`}>

			<TodoTask
				dataTodo={dataTodo}
				index={index}
				value={value}
				setValue={setValue}
			/>

			<TodoAction
				dataTodo={dataTodo}
				value={value}
			/>

		</li>
	);
};

export default TodoItem;