import { useState } from 'react';
import './../styles/components/todoCreator.scss';

const TodoCreator = ({ addTodo }) => {
	const [value, setValue] = useState('');

	const addDataTodo = () => {
		addTodo(value);
		setValue('');
	}

	return (
		<div className="todo-creator">

			<input
				onChange={(e) => setValue(e.target.value)}
				value={value}
				className="todo-creator__text"
				type="text"
				placeholder='add new task here...'
				name='create'
			/>

			<button onClick={addDataTodo} className="todo-creator__create">
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	);
};

export default TodoCreator;