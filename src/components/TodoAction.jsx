import './../styles/components/todoAction.scss';

const TodoAction = ({ dataTodo, deleteTodo, changeTodo, value }) => {
	const { id, changing } = dataTodo;

	return (
		<div className='todo-actions'>
			<button onClick={() => changeTodo(id, value)} className='todo-actions__btn'>
				{
					changing
						? <i className="fa-solid fa-floppy-disk"></i>
						: <i className="fa-solid fa-pen-to-square"></i>
				}
			</button>
			<button onClick={() => deleteTodo(id)} className='todo-actions__btn'>
				<i className="fa-solid fa-trash"></i>
			</button>
		</div>
	);
};

export default TodoAction;