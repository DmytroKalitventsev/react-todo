import './../styles/components/todosEmpty.scss';

const TodosEmpty = () => {
	return (
		<div className='todos-empty'>
			<i className="fa-regular fa-rectangle-list"></i>
			<span className='todos-empty__title'>No tasks yet</span>
			<span className='todos-empty__descr'>Add your to-dos and get the best experience</span>
		</div>
	);
};

export default TodosEmpty;