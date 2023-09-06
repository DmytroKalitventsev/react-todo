import './../styles/components/todoTask.scss';

const TodoTask = ({ dataTodo, index, toggleCompleteTodo, value, setValue }) => {
	const { id, title, completed, changing } = dataTodo;

	return (
		<label className='todo-task'>
			<input
				onChange={() => toggleCompleteTodo(id)}
				className='todo-task__check'
				type="checkbox"
				name='completed'
				checked={completed}
			/>
			<span className='todo-task__count'>{index}.</span>
			{
				changing
					?
					<input
						onChange={(e) => setValue(e.target.value)}
						value={value}
						className='todo-task__changing'
						type='text'
						name='change'
					/>
					:
					<p className='todo-task__text'>{title}</p>
			}
		</label>
	);
};

export default TodoTask;