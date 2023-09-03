import { useState } from 'react';
import TodoTask from './TodoTask';
import TodoAction from './TodoAction';
import './../styles/components/todoItem.scss';

const TodoItem = ({ dataTodo, index, toggleCompleteTodo, deleteTodo, changeTodo }) => {
	const { text, completed, changing } = dataTodo;
	const [value, setValue] = useState(text);

	return (
		<li className={`todo-item ${completed ? 'todo-item_complete' : ''} ${changing ? 'todo-item_changing' : ''}`}>

			<TodoTask
				dataTodo={dataTodo}
				index={index}
				toggleCompleteTodo={toggleCompleteTodo}
				value={value}
				setValue={setValue}
			/>

			<TodoAction
				dataTodo={dataTodo}
				deleteTodo={deleteTodo}
				changeTodo={changeTodo}
				value={value}
			/>

		</li>
	);
};

export default TodoItem;