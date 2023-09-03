import './../styles/components/todoTask.scss';

const TodoTask = ({ dataTodo, index, toggleCompleteTodo, value, setValue }) => {
	const { id, text, changing } = dataTodo;

	return (
		<label className='todo-task'>
			<input onChange={() => toggleCompleteTodo(id)} className='todo-task__check' type="checkbox" />
			<span className='todo-task__count'>{index}.</span>
			{
				changing
					? <input
						onChange={(e) => setValue(e.target.value)}
						value={value}
						className='todo-task__changing'
						type='text'
					/>
					: <p className='todo-task__text'>{text}</p>
			}
		</label>
	);
};

export default TodoTask;